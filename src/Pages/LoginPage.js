import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom";
import '../index.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Email:', email, 'Password:', password);
    // On successful login, redirect to home page
    // history.push('/');
  };

  return (
    <div className="login-container">
      <h1>Login to Code Arena</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="login-text">
            Don't have an account? <Link to="/register">Register Here</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
