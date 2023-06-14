import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div className="registration-container">
            <form onSubmit={handleSubmit}>
                <h2>Create an Account into Socialize Up</h2>
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
                <button type="submit">Sign Up</button>
                <p className="login-link">
                    Already have an account? <NavLink
                        to={'/login'}
                    >
                        Sign In
                    </NavLink>
                </p>
            </form>
        </div>
    );
};

export default Registration;
