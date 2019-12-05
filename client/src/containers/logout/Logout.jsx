import React from 'react';
import { useHistory } from 'react-router-dom';
import { removeAllCookies } from '../../services/cookies';
import { connect } from 'react-redux';
import './logout.css';
import http from '../../services/http';


function Logout(props) {
    const history = useHistory();

    const handleRoute = (name) => (e) => {
        e.preventDefault();
        history.push(name);
    };

    const yesButtonHandler = (e) => {
        e.preventDefault();

        http.User.logout().then(() => {
            removeAllCookies();
            props.setLoginValue();
            history.push('/login');
        });
    };

    const noButtonHandler = (e) => {
        e.preventDefault();
        history.push('/home');
    };

    return (
        <form>
            <div className="form-container">
                <h1>Logout</h1>
                <p>Do you really want to logout?</p>

                <div>
                    <button type="submit" className="logout-button" name="yes-btn" onClick={yesButtonHandler}><span>Yes</span></button>
                    <button type="submit" className="logout-button" name="no-btn" onClick={noButtonHandler}><span>No!</span></button>
                </div>

                <div className="form-info-container">
                    <p>Check out the new features in latest update <button className="form-info-button" onClick={handleRoute('/about')}>Here</button>.</p>
                </div>
            </div>
        </form>
    );
};

function mapStateToProps(state) {
    return {
        isLogin: state.login.isLogin,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setLoginValue: () => dispatch({
            type: 'USER_LOGGED_OUT',
        }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);