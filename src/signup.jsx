import React, { useState } from "react";
import { signUp } from "./AuthService";
import Upload from "./images/login.png";
import { useNavigate } from "react-router-dom";
import "./CSS/login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const idToken = await signUp(email, password);
      setToken(idToken);
      alert("Signup successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="content1">
          <h1>Welcome</h1>
          <img src={Upload} alt="Example" />
        </div>
        <div className="content2">
          <div className="title">
            <button className="button" onClick={() => handleNavigate("/")}>
              Login
            </button>
            <button
              className="select"
              onClick={() => handleNavigate("/signup")}
            >
              Register
            </button>
          </div>
          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
            <label>
              Email Address :-
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password :-
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button className="submit" type="submit">
              Signup
            </button>
          </form>
          {token && <p>Token: {token}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
