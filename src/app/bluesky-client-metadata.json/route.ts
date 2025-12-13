import {blueskyOauthClient} from "@/utils/bluesky";

export async function GET() {
  return Response.json(blueskyOauthClient.clientMetadata);
}
