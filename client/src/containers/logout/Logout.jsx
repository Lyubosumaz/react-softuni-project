import React from 'react';
import { useHistory } from 'react-router-dom';
import { removeAllCookies } from '../../services/cookies';
import { connect } from 'react-redux';
import './logout.css';
import http from '../../services/http';
import handleRoute from '../../utils/handleRoutes';


function Logout(props) {
    const history = useHistory();

    const yesButtonHandler = (e) => {
        e.preventDefault();

        http.User.logout().then(() => {
            removeAllCookies();
            props.setLoginValue()
            history.push('/home');
        })
        .catch((err)=>{
            console.log(err)
        })
    };

    return (
        <div className="main-container">
            <form>
                <h1>Logout</h1>
                <p>Do you really want to logout?</p>

                <div>
                    <button type="submit" className="logout-button" name="yes-btn" onClick={yesButtonHandler}><span>Yes</span></button>
                    <button type="submit" className="logout-button" name="no-btn" onClick={handleRoute('/home')}><span>No!</span></button>
                </div>

                <div className="info-container">
                    <p>Check out the new features in latest update <button className="info-button" onClick={handleRoute('/about')}>Here</button>.</p>
                </div>
            </form>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
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