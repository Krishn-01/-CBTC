import { useEffect, useState } from "react";

export default function Posts() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      <h2>My Posts</h2>

      <div className="blog-grid">
        {blogs.map(blog => (
          <div className="blog-card" key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}