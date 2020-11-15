import { Fragment } from 'react';
import { connect } from 'react-redux';
import handleRoute from '../../utils/handleRoutes';
import numberGenerator from '../../utils/numberGenerator';
import './header.css';

function Header(props) {
    const isLogged = props.isLogin;

    return (
        <div className="nav-container">
            {isLogged ?
                <Fragment key={numberGenerator()}>
                    <button className="nav-bar-button" name="active" onClick={handleRoute('/game')}>Game</button>
                    <button className="nav-bar-button" name="active" onClick={handleRoute('/games')}>Games</button>
                    <button className="nav-bar-button" name="active" onClick={handleRoute('/puzzles')}>Puzzles</button>
                </Fragment>
                :
                <button className="nav-bar-button" name="active" onClick={handleRoute('/home')}>Home</button>
            }
            <button className="nav-bar-button" onClick={handleRoute('/house-of-fame')}>House of Fame</button>


            <div className="nav-container-right">
                {isLogged ?
                    <Fragment key={numberGenerator()}>
                        <button className="nav-bar-button" onClick={handleRoute('/social')}>Social</button>
                        <button className="nav-bar-button" onClick={handleRoute('/profile')}>Profile</button>
                        <button className="nav-bar-button" onClick={handleRoute('/logout')}>Logout</button>
                    </Fragment>
                    :
                    <Fragment key={numberGenerator()}>
                        <button className="nav-bar-button" onClick={handleRoute('/register')}>Register</button>
                        <button className="nav-bar-button" onClick={handleRoute('/login')}>Login</button>
                    </Fragment>
                }
            </div>
        </div >
    );
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
}

export default connect(mapStateToProps)(Header);
