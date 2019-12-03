import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import history from '../../services/history';
import './header.css';

function Header(props) {
    const isLogged = props.isLogin;

    const handleClick = (name) => (e) => {
        e.preventDefault();
        history.push(name);
    }

    return (
        <div className="nav-container">
            {isLogged ? <a className="active" onClick={handleClick('/game')}>Game</a> : <a className="active" onClick={handleClick('/home')}>Home</a>}
            <a onClick={handleClick('/house-of-fame')}>House of Fame</a>
            <div className="nav-container-right">
                {isLogged ?
                    <Fragment>
                        <a onClick={handleClick('/profile')}>Profile</a>
                        <a onClick={handleClick('/logout')}>Logout</a>
                    </Fragment>
                    :
                    <Fragment>
                        <a onClick={handleClick('/register')}>Register</a>
                        <a onClick={handleClick('/login')}>Login</a>
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