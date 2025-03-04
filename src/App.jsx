import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import Home from "./pages/home";

function App() {
  const location = useLocation();
  const nonavbarpath = ["/signup", "/"];

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

// ✅ Fix: Add basename for GitHub Pages
export default function Root() {
  return (
    <Router basename="/quiz-platform-react-Re-Engineering">
      <App />
    </Router>
  );
}
