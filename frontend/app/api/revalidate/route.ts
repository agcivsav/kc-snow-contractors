import {revalidatePath} from "next/cache"
import {type NextRequest, NextResponse} from "next/server"

/**
 * POST /api/revalidate?secret=...
 * Call from a Sanity webhook (or manually) after Publish to purge Netlify/Next caches.
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret")
  const expected = process.env.REVALIDATE_SECRET

  if (!expected || secret !== expected) {
    return NextResponse.json({message: "Invalid secret"}, {status: 401})
  }

  revalidatePath("/", "layout")

  return NextResponse.json({revalidated: true, now: Date.now()})
}
