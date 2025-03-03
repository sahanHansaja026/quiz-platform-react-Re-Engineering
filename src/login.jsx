import React, { useState } from "react";
import { login } from "./AuthService";
import "./CSS/login.css";
import Upload from "./images/login.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token,setToken] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const idToken = await login(email, password);
      setToken(idToken);
      alert("Login successful!");
      navigate("/home");
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
            <button className="select" onClick={() => handleNavigate("/")}>
              Login
            </button>
            <button
              className="button"
              onClick={() => handleNavigate("/signup")}
            >
              Register
            </button>
          </div>
          <form onSubmit={handleLogin}>
            <label>
              Email Address :-
              <br />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password :-
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button className="submit" type="submit">
              Login
            </button>
          </form>
          {token && <p>Token: {token}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
