import React, { useState } from 'react';
import '../LogIn.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Both fields are required.');
    } else {
      setError('');
      localStorage.setItem("username", username); 
      alert('Sign Up successful!');
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="textbox">
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="error-message">{error}</div>
          <input type="submit" value="Sign Up" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
