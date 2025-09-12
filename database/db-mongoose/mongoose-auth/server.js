import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/auth", authRoutes);

// connect MongoDB + start server
mongoose.connect("mongodb://127.0.0.1:27017/miniAuth")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => console.log("Server running on http://localhost:3000"));
  })
  .catch(err => console.error(err));
