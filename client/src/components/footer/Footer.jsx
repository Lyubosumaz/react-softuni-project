import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <div className="main-footer clearfix">
            <p className="copy-write">
                &copy; SoftUni Lyubosumaz Final Project
            </p>
            <ul className="footer-nav clearfix">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    );
}