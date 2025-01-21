import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  SERVER_PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("Inalid env variables", _env.error.format());
  throw new Error("Invalid env variables.");
}

export const env = _env.data;