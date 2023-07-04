import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/auth/login", {
      username: email, password
    })
      .then((res) => {
        if (res?.data) {
          sessionStorage.setItem("user", JSON.stringify(res.data));
          navigate("/");
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => {
        sessionStorage.clear();
        console.log({ err })
      })

  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign In to Socialize Up</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Sign In</button>
        <p className="signup-link">
          Don't have an account? <NavLink
            to={'/registration'}
          >
            Sign Up
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
