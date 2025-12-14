import {handleCallback} from "@/utils/bluesky";
import {NextRequest} from "next/server";
import "@/config/db"
import {getUser} from "@/utils/db";

export async function GET(request: NextRequest) {
  const session = await handleCallback(request.nextUrl.searchParams);
  const user = await getUser(session.sub)
  if (!user) {
    return new Response("User not found", {status: 404});
  }
  return Response.json({day: user.day, month: user.month});
}
