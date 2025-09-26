import { Client } from "pg";

export async function connectDB() {
  const dbClient = new Client({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
  });

  try {
    await dbClient.connect();
    console.log("✅ Connected to PostgreSQL");
    return dbClient;
  } catch (err) {
    console.error("❌ Connection error:", err);
    throw err;
  }
}
