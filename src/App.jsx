import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import Navbar from "./components/navbar"; // Assuming you have a Navbar component
import Home from "./pages/home";
function App() {
  const location = useLocation();
  const nonavbarpath = ["/signup", "/"];

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!nonavbarpath.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

// Wrap the App component with Router at the root level
export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
