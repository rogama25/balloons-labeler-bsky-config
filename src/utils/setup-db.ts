import {db} from "@/config/db"

try {
  await db.sync();
  console.log("DB sync done");
} catch (e) {
  console.error(`DB sync failed ${e}`);
}
