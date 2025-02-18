import { app } from "./app";
import { env } from "./utils/env";

app.listen({
  host: '0.0.0.0',
  port: env.SERVER_PORT
}).then(() => {
  console.log("Server running on port: ", env.SERVER_PORT);
});