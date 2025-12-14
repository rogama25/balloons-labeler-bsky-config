import {startAuth} from "@/utils/bluesky";
import "@/config/db"
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
  const handle = "rogama25.es";
  const redirectUrl = await startAuth(handle);
  return Response.redirect(redirectUrl);
}
