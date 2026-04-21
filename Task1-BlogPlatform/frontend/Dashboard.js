import { useEffect, useState } from "react";

export default function Dashboard() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await fetch("http://localhost:5000/api/blogs");
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="dashboard">

      {/* 🔥 TOP BANNER */}
      <div className="banner">
        <div>
          <h2>Welcome back, Harshit 👋</h2>
          <p>Ready to share your next story?</p>
        </div>

        <button className="create-btn">Create New Post</button>
      </div>

      {/* 🔥 STATS */}
      <div className="stats">
        <div className="card">👁️ Views <h2>128.5K</h2></div>
        <div className="card">💬 Comments <h2>320</h2></div>
        <div className="card">👥 Subscribers <h2>8.4K</h2></div>
        <div className="card">💰 Earnings <h2>$2560</h2></div>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="content">

        {/* LEFT SIDE */}
        <div className="left">

          <h2 className="section-title">Recent Posts</h2>

          <div className="blog-grid">
            {blogs.map((blog) => (
              <div className="blog-card" key={blog._id}>
                
                {/* FAKE IMAGE (like design) */}
                <div className="blog-img"></div>

                <h3>{blog.title}</h3>
                <p>{blog.content}</p>

                <span>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">

          {/* TOP POST */}
          <div className="top-post">
            <h3>🔥 Top Performing</h3>
            <p>How to Start a Successful Blog</p>
            <span>25.4K views</span>
          </div>

          {/* TRENDING */}
          <div className="trending">
            <h3>Trending Topics</h3>
            <div className="tags">
              <span>#Tech</span>
              <span>#AI</span>
              <span>#Travel</span>
              <span>#Fitness</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}