import {handleCallback} from "@/utils/bluesky";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
  await handleCallback(request.nextUrl.searchParams)
}
