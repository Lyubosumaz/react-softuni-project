import React from 'react';
import userService from '../../services/user-services';
import './logout.css';

export default function Logout(props) {
    console.log(props)

    const yesButtonHandler = () => {
        // document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        // props.history.push('/home');
        userService.logout().then(() => {
            props.history.push('/home');
        });
    }
    const noButtonHandler = () => {
        props.history.push('/home');
    }


    return (
        <form>
            <div className="form-container">
                <h1>Logout</h1>
                <p>Do you really want to logout?</p>

                <div>
                    <button type="submit" className="logout-button" id="yes-btn" onClick={yesButtonHandler}><span>Yes</span></button>
                    <button type="submit" className="logout-button" id="no-btn" onClick={noButtonHandler}><span>No!</span></button>
                </div>

                <div className="form-info-container">
                    <p>Check out the new features in latest update <a href="/home">Here</a>.</p>
                </div>
            </div>
        </form>
    );
}