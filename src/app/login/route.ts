import {startAuth} from "@/utils/bluesky";
import "@/config/db"

export async function GET() {
  const handle = "rogama25.es";
  const redirectUrl = await startAuth(handle);
  return Response.redirect(redirectUrl);
}
