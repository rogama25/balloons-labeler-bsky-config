import {Sequelize} from "sequelize-typescript";
import "dotenv/config"
import {BlueskyLoginState, BlueskySession, User} from "@/types/db";
import pg from "pg";

export const db = new Sequelize(process.env.DB || "", {
  dialect: "postgres",
  dialectModule: pg
});

db.addModels([
  User,
  BlueskySession,
  BlueskyLoginState
])
console.log("MODELS LOADED")
