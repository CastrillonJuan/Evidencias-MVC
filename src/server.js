import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/dbconn.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/", authRoutes);

const PORT = process.env.SRV_PORT || 3000;

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// Iniciar servidor
app.listen(PORT, async () => {
  console.log(`Server en puerto ${PORT}`);
  await connectDB();
});