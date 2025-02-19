import { pgTable, varchar, timestamp, numeric, uuid, integer, pgEnum } from "drizzle-orm/pg-core";

export const fuelTypes = pgEnum("fuel_type", ["gasoline", "hybrid", "electric"]);
export const transmissionTypes = pgEnum("transmission", ["manual", "automatic"]);
export const carStatus = pgEnum("status", ["available", "sold", "reserved"]);

export const carsTable = pgTable("cars", {
  id: uuid().primaryKey(),
  model: varchar({ length: 255 }).notNull(),
  brand: varchar({ length: 255 }).notNull().unique(),
  year: integer().notNull(),
  price: numeric().notNull(),
  mileage:integer().notNull().default(0),
  fuel_type: fuelTypes().notNull(),
  transmission: transmissionTypes().notNull(),
  status: carStatus().notNull(),
  picture: varchar({ length: 255 }).notNull(),
  color: varchar({ length: 30 }).notNull(),
  created_at: timestamp().defaultNow(),
  updated_at: timestamp().$onUpdate(()=> new Date()),
  deleted_at: timestamp()
});
