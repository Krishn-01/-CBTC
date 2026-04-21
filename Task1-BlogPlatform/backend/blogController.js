const Blog = require("../models/Blog");

// CREATE
exports.createBlog = async (req, res) => {
  const blog = await Blog.create(req.body);
  res.json(blog);
};

// GET
exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};

// DELETE
exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

// UPDATE
exports.updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(blog);
};