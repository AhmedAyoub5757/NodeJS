import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import homeRouter from "./routes/home.js";
import aboutRouter from "./routes/about.js";
import contactRouter from "./routes/contact.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Routers
app.use("/", homeRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
