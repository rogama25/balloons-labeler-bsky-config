import {startAuth} from "@/utils/bluesky";
import "@/config/db"
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
  const handle = request.nextUrl.searchParams.get("handle") || "";
  const redirectUrl = await startAuth(handle);
  return Response.redirect(redirectUrl);
}
