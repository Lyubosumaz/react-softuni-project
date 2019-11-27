import React from 'react';
import './register.css';

export default function Register() {
    return (
        <form>
            <div className="register-container">
                <h1>Register</h1>
                <p>Please fill this form to create your Account.</p>

                <div>
                    <label for="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter your Username" name="username" required />
                </div>

                <div>
                    <label for="password"><b>Password</b></label>
                    <input type="text" placeholder="Enter your Password" name="password" required />
                </div>

                <div>
                    <label for="repeat-password"><b>Repeat-Password</b></label>
                    <input type="text" placeholder="Repeat your Password" name="repeat-password" required />
                </div>

                <div>
                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    <button type="submit" className="register-btn">Register</button>
                </div>

                <div className="signin-container">
                    <p>Already have account? <a href="/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    );
}