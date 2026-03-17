import dotenv from "dotenv";
dotenv.config();
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

export const connectDB = async () => {
  try {
    await pool.query("SELECT 1");
    console.log("DB conectada");
  } catch (error) {
    console.error("Error DB:", error);
  }
};

export default pool;