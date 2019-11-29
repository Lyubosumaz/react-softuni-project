import React from 'react';

import './logout.css';

export default function Logout() {
    return (
        <form>
            <div className="form-container">
                <h1>Logout</h1>
                <p>Do you really want to logout?</p>

                <div>
                    <button type="submit" className="logout-button" id="yes-btn"><span>Yes</span></button>
                    <button type="submit" className="logout-button" id="no-btn"><span>No!</span></button>
                </div>

                <div className="form-info-container">
                    <p>Check out the new features in latest update <a href="/home">Here</a>.</p>
                </div>
            </div>
        </form>
    );
}