import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const carsTable = pgTable("cars", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  brand: varchar({ length: 255 }).notNull().unique(),
  year: varchar({ length: 4 }).notNull(),
  mileage: varchar({ length: 255 }).notNull()
});
