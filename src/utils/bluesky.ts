import {JoseKey, NodeOAuthClient, NodeSavedSession, NodeSavedState} from "@atproto/oauth-client-node";
import clientMetadata from "../resources/bluesky-client-metadata.json"
import {
  deleteSessionData,
  deleteStateData,
  getSessionData,
  getStateData,
  saveSessionData,
  saveStateData
} from "@/utils/db";

export const blueskyOauthClient = new NodeOAuthClient({
  clientMetadata: clientMetadata as never,
  stateStore: {
    async set(sub: string, sessionData: NodeSavedState) {
      console.log(`[stateStore.set] Saving state for sub: ${sub}`, sessionData);
      await saveStateData(sub, sessionData)
    },
    async get(sub: string) {
      console.log(`[stateStore.get] Getting state for sub: ${sub}`);
      const sessionData = await getStateData(sub)
      if (!sessionData) {
        console.log(`[stateStore.get] No state found for sub: ${sub}`);
        return undefined
      }
      console.log(`[stateStore.get] Retrieved state for sub: ${sub}`, sessionData.loginState);
      return sessionData.loginState as NodeSavedState
    },
    async del(sub: string) {
      // Delete the session data from your database
      await deleteStateData(sub)
    },
  },
  sessionStore: {
    async set(sub: string, sessionData: NodeSavedSession) {
      console.log(`[sessionStore.set] Saving session for sub: ${sub}`, sessionData);
      await saveSessionData(sub, sessionData)
    },
    async get(sub: string) {
      console.log(`[sessionStore.get] Getting session for sub: ${sub}`);
      const sessionData = await getSessionData(sub)
      if (!sessionData) {
        console.log(`[sessionStore.get] No session found for sub: ${sub}`);
        return undefined
      }
      console.log(`[sessionStore.get] Retrieved session for sub: ${sub}`, sessionData.sessionData);
      return sessionData.sessionData as NodeSavedSession
    },
    async del(sub: string) {
      // Delete the session data from your database
      await deleteSessionData(sub)
    },
  },
  keyset: await Promise.all([
    JoseKey.fromImportable(process.env.KEY_1 || ""),
    JoseKey.fromImportable(process.env.KEY_2 || ""),
    JoseKey.fromImportable(process.env.KEY_3 || ""),
  ])
})

export async function startAuth(userHandle: string) {
  return blueskyOauthClient.authorize(userHandle, {
    scope: "atproto"
  })
}

export async function handleCallback(params: URLSearchParams) {
  const {session} = await blueskyOauthClient.callback(params)
  console.log("User authenticated:", session.did)
}
