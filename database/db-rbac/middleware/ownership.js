import Blog from "../models/Blog.js";

export const checkOwnership = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    // Admins skip ownership check
    if (req.user.role === "admin") {
      req.blog = blog; // attach blog to request
      return next();
    }

    // Editors must own the blog
    if (req.user.username === blog.author) {
      req.blog = blog;
      return next();
    }

    return res.status(403).json({ error: "Forbidden: not your blog" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
