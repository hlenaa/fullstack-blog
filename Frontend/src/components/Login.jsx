import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/login.webp";
import { useTheme } from "../Context/ThemeContext"; 

import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
import "../Styles/LogIn.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const { darkMode, setDarkMode } = useTheme();

  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode); 
      return newMode;
    });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username === "" && password === "") {
      localStorage.setItem("loggedIn", "true");
      
      navigate("/home");
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Both fields are required.");
    } else {
      localStorage.setItem("username", username);
      alert("Sign Up successful!");
      setIsLogin(true);
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, [darkMode]);



  return (
    <>
    <button
        onClick={toggleDarkMode}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "6px",
          borderRadius: "50%", 
          border: "none",
          background: darkMode ? "#222" : "#ddd", 
          color: darkMode ? "#fff" : "#333",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px", 
          height: "40px", 
        }}
      >
        <img
          src={darkMode ? moon : sun}
          alt="Theme Icon"
          className="theme-icon"
          style={{
            width: "20px", 
            height: "20px", 
          }}
        />
      </button>
      <div className="min-h-screen flex items-center justify-center ">
        <div
          className="container bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${loginImg})`,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundBlend: "overlay",
          }}
        >
          <div className="toggle-container backdrop-blur-sm bg-black/20">
            <div className={`toggle-btn ${isLogin ? "active" : ""}`}>
              <h3 className="text-acc">Already Have an Account ?</h3>
              <button onClick={() => setIsLogin(true)}>Login</button>
            </div>
            <div className={`toggle-btn ${!isLogin ? "active" : ""}`}>
              <h3 className="text-acc">Don't Have an Account ?</h3>
              <button onClick={() => setIsLogin(false)}>Sign Up</button>
            </div>
          </div>

          <div className="form-container">
            <div
              className={`form-box ${isLogin ? "slide-left" : "slide-right"}`}
            >
              <div className="form">
                <h2>Welcome to the Wizarding World</h2>
                <form onSubmit={handleLoginSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && <div className="error">{error}</div>}
                  <button type="submit">Login</button>
                </form>
              </div>

              <div className="form">
                <h2>Sign Up to the Wizarding World</h2>
                <form onSubmit={handleSignUpSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Choose Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      placeholder="Choose Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && <div className="error">{error}</div>}
                  <button type="submit">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
