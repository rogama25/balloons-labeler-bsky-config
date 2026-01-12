import {handleCallback} from "@/utils/bluesky";
import {NextRequest} from "next/server";
import "@/config/db"
import {getUser} from "@/utils/db";
import {SignJWT} from "jose";
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const session = await handleCallback(request.nextUrl.searchParams);
  const user = await getUser(session.sub)
  if (!user) {
    return new Response("User not found", {status: 404});
  }
  // Set sub as JWT cookie
  const secret = new TextEncoder().encode(process.env.JWT_SECRET || "")
  const jwtEncrypted = await new SignJWT({sub: session.sub})
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secret)
  const cookieStore = await cookies()
  cookieStore.set("auth", jwtEncrypted, {
    httpOnly: true,
    secure: true,
    expires: 24 * 60 * 60 * 1000,
    sameSite: "lax",
    path: "/"
  })
  return Response.json({day: user.day, month: user.month});
}
