import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../LogIn.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  
  const navigate = useNavigate(); 

  // Mock credentials
  const mockCredentials = {
    username: 'harrypotter',
    password: 'magic123',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (username === mockCredentials.username && password === mockCredentials.password) {
      setError('');
      setLoggedIn(true);
      localStorage.setItem("loggedIn", "true"); 
      alert('Login successful! Welcome to the Wizarding World!');
      
      navigate('/home'); 
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      {!loggedIn ? (
        <div className="login-box">
          <h1>Welcome to the Wizarding World</h1>
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
            <input type="submit" value="Login" className="btn" />
          </form>
        </div>
      ) : (
        <div className="welcome-message">
          <h1>Welcome, {username}! You're now in the Wizarding World!</h1>
        </div>
      )}
    </div>
  );
};

export default Login;
