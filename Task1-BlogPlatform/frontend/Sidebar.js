import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🔥BlogSphere</h2>

      <ul>
        <li><Link to="/">🏠 Dashboard</Link></li>
        <li><Link to="/posts">📝 My Posts</Link></li>
        <li><Link to="/write">➕ Write</Link></li>
        <li>📊 Analytics</li>
        <li>⚙️ Settings</li>
      </ul>
    </div>
  );
}