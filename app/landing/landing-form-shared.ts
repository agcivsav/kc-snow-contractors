export const inputClass =
  "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400";

export const errClass = "text-sm text-red-600 mt-1 block";

export function errMsg(error: { message?: string } | undefined): string {
  return (error?.message as string) ?? "";
}
