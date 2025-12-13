import {Sequelize} from "sequelize-typescript";
import "dotenv/config"
import {BlueskyLoginState, BlueskySession, User} from "@/types/db";

export {};

export const db = new Sequelize(process.env.DB || "");

db.addModels([
  User,
  BlueskySession,
  BlueskyLoginState
])
console.log("MODELS LOADED")
