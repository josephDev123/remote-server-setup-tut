import { Client } from "pg";

export async function connectDB() {
  const dbClient = new Client({
    host: "localhost",
    user: "myappuser",
    password: "myAppUser",
    database: "myapp",
    port: 5432,
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
