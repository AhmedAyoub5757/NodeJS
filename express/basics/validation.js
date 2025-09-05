import express from "express";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const app = express();

// ✅ Schema
const envSchema = z.object({
  PORT: z.string().transform((val) => parseInt(val, 10)).refine((val) => !isNaN(val), {
    message: "PORT must be a valid number",
  }),
//   DB_URL: z.string().url("DB_URL must be a valid URL"),
  SECRET_KEY: z.string().min(1, "SECRET_KEY cannot be empty"),
});

// ✅ Safe parse
const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("❌ Environment validation failed:");
  console.error(result.error.format()); // pretty print errors
  process.exit(1); // stop the app
}

const env = result.data; // validated values

app.get("/", (req, res) => {
  res.send("Zod validated env variables successfully 🚀");
});

app.listen(env.PORT, () => {
  console.log(`✅ Server running on http://localhost:${env.PORT}`);
});
