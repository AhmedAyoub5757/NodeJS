import express from "express";
import Blog from "../models/Blog.js";
import { requirePermission } from "../middleware/rbac.js";
import { checkOwnership } from "../middleware/ownership.js";

const router = express.Router();  // 👈 declare router first

// Create Blog (editor/admin)
router.post("/", requirePermission("create:blogs"), async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      author: req.user.username,
    });

    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Blogs (everyone can read)
router.get("/", requirePermission("read:blogs"), async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// Update Blog (ownership check for editor, admin bypass)
router.put("/:id", 
  requirePermission("edit:own:blogs"), 
  checkOwnership, 
  async (req, res) => {
    req.blog.title = req.body.title;
    req.blog.content = req.body.content;
    await req.blog.save();
    res.json(req.blog);
});

// Delete Blog
router.delete("/:id", 
  requirePermission("delete:own:blogs"), 
  checkOwnership, 
  async (req, res) => {
    await req.blog.deleteOne();
    res.json({ message: "Blog deleted" });
});

export default router;  // 👈 don’t forget this
