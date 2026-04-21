import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Write from "./pages/Write";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />

        <div className="main">
          <Navbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;