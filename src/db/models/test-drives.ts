import { pgEnum, pgTable, PgTable, uuid, timestamp } from "drizzle-orm/pg-core"
import { usersTable } from "./users"
import { carsTable } from "./cars"

export const testDriveStatus = pgEnum("", ["pending", "confirmed", "cancelled", "completed"])

export const testDriveTable = pgTable("test_drives", {
  id: uuid().primaryKey(),
  user_id: uuid().notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  car_id: uuid().notNull().references(() => carsTable.id, { onDelete: "cascade" }),
  scheduled_at: timestamp().notNull(),
  status: testDriveStatus().notNull().default("pending"),
  created_at: timestamp().defaultNow(),
  updated_at: timestamp().$onUpdate(() => new Date)
})