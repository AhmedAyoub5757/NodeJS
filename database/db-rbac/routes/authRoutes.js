import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { loginUser } from "../middleware/auth.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword, role });
    await user.save();

    res.json({ message: "User registered successfully", user: { username, role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const sessionUser = await loginUser(username, password);
    if (!sessionUser) return res.status(400).json({ error: "Invalid credentials" });

    res.json({ message: "Login success", sessionUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
