import {NodeSavedSession, NodeSavedState} from "@atproto/oauth-client-node";
import {BlueskyLoginState, BlueskySession, User} from "@/types/db";

export async function saveSessionData(sub: string, sessionData: NodeSavedSession) {
  return BlueskySession.upsert({sub, sessionData})
}

export async function getSessionData(sub: string) {
  return BlueskySession.findOne({where: {sub}})
}

export async function deleteSessionData(sub: string) {
  await BlueskySession.destroy({where: {sub}})
}

export async function saveStateData(sub: string, loginState: NodeSavedState) {
  await BlueskyLoginState.upsert({sub, loginState})
}

export async function getStateData(sub: string) {
  return BlueskyLoginState.findOne({where: {sub}})
}

export async function deleteStateData(sub: string) {
  await BlueskyLoginState.destroy({where: {sub}})
}

export async function getUser(did: string) {
  return User.findOne({where: {did}})
}
