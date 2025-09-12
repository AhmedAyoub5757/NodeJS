import bcrypt from "bcryptjs";
import User from "../models/User.js";

// Fake in-memory session store
const sessions = {};  
// example: sessions["ahmed"] = { username: "ahmed", role: "editor" }

export const loginUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;

  // save in sessions
  sessions[username] = { username: user.username, role: user.role };
  return sessions[username];
};

export const getSessionUser = (username) => {
  return sessions[username] || null;
};
