import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import '../index.css';
import {Link } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
//   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Implement registration logic here
    console.log('Email:', email, 'Password:', password);
    // On successful registration, redirect to login page
    // history.push('/login');
  };

  return (
    <div className="register-container">
      <h1>Register for Code Arena</h1>
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
        <div className="form-group">
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="register-button">Register</button>
        <div className="register-text">
            Already have an account? <Link to="/login">Login Here</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
