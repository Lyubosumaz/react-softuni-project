import React from 'react';
import './login.css';

export default function Login() {
    return (
        <form>
            <div className="login-container">
                <h1>Login</h1>
                <p>Please enter your Username and Password</p>

                <div>
                    <label for="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter your Username" name="username" required />
                </div>

                <div>
                    <label for="password"><b>Password</b></label>
                    <input type="text" placeholder="Enter your Password" name="password" required />
                </div>

                <div>
                    <button type="submit" className="login-btn">Login</button>
                </div>

                <div className="info-container">
                    <p>Don't have an account? <a href="/register">Create account</a>.</p>
                </div>
            </div>
        </form>
    );
}