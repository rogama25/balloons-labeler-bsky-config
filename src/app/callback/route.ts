import {handleCallback} from "@/utils/bluesky";
import {NextRequest} from "next/server";
import "@/config/db"

export async function GET(request: NextRequest) {
  await handleCallback(request.nextUrl.searchParams)
}
