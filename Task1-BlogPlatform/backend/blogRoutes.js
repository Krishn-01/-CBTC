const express = require("express");
const router = express.Router();
const {
  createBlog,
  getBlogs,
  deleteBlog,
  updateBlog
} = require("../controllers/blogController");

router.post("/", createBlog);
router.get("/", getBlogs);
router.delete("/:id", deleteBlog);
router.put("/:id", updateBlog);

module.exports = router;