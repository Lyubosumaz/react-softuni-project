import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './header.css';
import handleRoute from '../../utils/handleRoutes';

function Header(props) {
    const isLogged = props.isLogin;

    return (
        <div className="nav-container">
            {isLogged ?
                <button className="nav-bar-button" name="active" onClick={handleRoute('/game')}>Game</button>
                :
                <button className="nav-bar-button" name="active" onClick={handleRoute('/home')}>Home</button>
            }
            <button className="nav-bar-button" onClick={handleRoute('/house-of-fame')}>House of Fame</button>
            <div className="nav-container-right">
                {isLogged ?
                    <Fragment>
                        <button className="nav-bar-button" onClick={handleRoute('/social')}>Social</button>
                        <button className="nav-bar-button" onClick={handleRoute('/profile')}>Profile</button>
                        <button className="nav-bar-button" onClick={handleRoute('/logout')}>Logout</button>
                    </Fragment>
                    :
                    <Fragment>
                        <button className="nav-bar-button" onClick={handleRoute('/register')}>Register</button>
                        <button className="nav-bar-button" onClick={handleRoute('/login')}>Login</button>
                    </Fragment>
                }
            </div>
        </div >
    );
};

function mapStateToProps(state) {
    return {
        isLogin: state.login.isLogin
    }
}

export default connect(mapStateToProps)(Header);