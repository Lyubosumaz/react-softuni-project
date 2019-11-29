import React from 'react';
import './logout.css';

export default function Logout() {
    return (
        <form>
            <div className="logout-container">
                <h1>Logout</h1>
                <p>Do you really want to logout?</p>

                <div>
                    <button type="submit" className="yes-btn"><span>Yes</span></button>
                    <button type="submit" className="no-btn"><span>No!</span></button>
                </div>

                <div className="info-container">
                    <p>Check out the new features in latest update <a href="/home">Here</a>.</p>
                </div>
            </div>
        </form>
    );
}