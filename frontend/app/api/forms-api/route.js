import {NextResponse} from "next/server"
import crypto from "crypto"

export const dynamic = "force-dynamic"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Idempotency-Key",
  "Access-Control-Max-Age": "86400",
}

function env(name) {
  const value = process.env[name]?.trim()
  return value || ""
}

export async function OPTIONS() {
  return NextResponse.json({}, {headers: corsHeaders})
}

export async function POST(request) {
  try {
    const secret = env("LEAD_SECRET")
    const laravelBase = env("LARAVEL_BASE_URL").replace(/\/$/, "")
    const siteId = env("LEADS_SITE_ID")

    if (!secret || !laravelBase || !siteId) {
      console.error("Form API missing env:", {
        LEAD_SECRET: Boolean(secret),
        LARAVEL_BASE_URL: Boolean(laravelBase),
        LEADS_SITE_ID: Boolean(siteId),
      })
      return NextResponse.json(
        {error: "Server configuration error"},
        {status: 500, headers: corsHeaders},
      )
    }

    let parsed = {}
    try {
      parsed = await request.json()
    } catch (error) {
      console.error("Failed to parse request body:", error)
      return NextResponse.json(
        {error: "Invalid JSON body"},
        {status: 400, headers: corsHeaders},
      )
    }

    const formId = parsed.formId
    if (!formId) {
      return NextResponse.json(
        {error: "formId is required"},
        {status: 400, headers: corsHeaders},
      )
    }

    delete parsed.formId

    const sanitizedBody = JSON.stringify(parsed)
    const ts = Math.floor(Date.now() / 1000).toString()
    const sig = crypto
      .createHmac("sha256", secret)
      .update(`${ts}.${sanitizedBody}`)
      .digest("hex")

    const idem = request.headers.get("idempotency-key") || ""
    const clientIp =
      request.headers.get("x-nf-client-connection-ip") ??
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      ""

    const laravelUrl = `${laravelBase}/api/site/${siteId}/form/${formId}/submit`

    const resp = await fetch(laravelUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Timestamp": ts,
        "X-Signature": sig,
        "X-Partner": "nextjs",
        "Idempotency-Key": idem,
        ...(clientIp
          ? {"X-Forwarded-For": clientIp, "X-Real-IP": clientIp}
          : {}),
      },
      body: sanitizedBody,
    })

    const text = await resp.text()
    let responseData
    try {
      responseData = JSON.parse(text)
    } catch {
      responseData = text
    }

    return NextResponse.json(responseData, {
      status: resp.status,
      headers: corsHeaders,
    })
  } catch (error) {
    console.error("Form API error:", error)
    return NextResponse.json(
      {error: "Upstream request failed"},
      {status: 500, headers: corsHeaders},
    )
  }
}
