import { uuid, pgTable, varchar, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const userRoles = pgEnum("role", ["user", "admin"]);

export const usersTable = pgTable("users", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: userRoles().notNull().default("user"),
  phone_number: varchar({ length: 20 }).notNull(),
  created_at: timestamp().defaultNow(),
  updated_at: timestamp().$onUpdate(()=> new Date()),
  deleted_at: timestamp()
});
