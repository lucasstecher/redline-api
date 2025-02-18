import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "src/utils/env";

export const db = drizzle(env.DATABASE_URL!);