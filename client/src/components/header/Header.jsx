import React, { Fragment } from 'react';
import './header.css';


export default function Header(props) {
    return (
        <div className="nav-container">
            <a className="active" href="/home">Home</a>
            <a href="/house-of-fame">House of Fame</a>

            <div className="nav-container-right">
                {props.isLogged ?
                    <Fragment>
                        <a href="/profile">Profile</a>
                        <a href="/logout">Logout</a>
                    </Fragment>
                    :
                    <Fragment>
                        <a href="/register">Register</a>
                        <a href="/login">Login</a>
                    </Fragment>
                }
            </div>
        </div >
    );
}