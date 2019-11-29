import React from 'react';
import './header.css';


export default function Header() {
    return (
        <div className="nav-container">
            <a className="active" href="/home">Home</a>
            <a href="/house-of-fame">House of Fame</a>

            <div className="nav-container-right">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/logout">Logout</a>
            </div>
        </div>
    );
}