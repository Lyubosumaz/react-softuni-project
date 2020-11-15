import { Fragment } from 'react';
import { connect } from 'react-redux';
import handleRoute from '../../utils/handleRoutes';
import numberGenerator from '../../utils/numberGenerator';

function Header(props) {
    const isLogged = props.isLogin;

    return (
        <header className="site-header">
            <nav className="site-navigation">
                <ul>
                    <li className="nav-container-left">
                        <ul>
                            {isLogged ? (
                                <Fragment key={numberGenerator()}>
                                    <li>
                                        <a className="nav-bar-button active" onClick={handleRoute('/game')}>
                                            Game
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-bar-button active" onClick={handleRoute('/games')}>
                                            Games
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-bar-button active" onClick={handleRoute('/puzzles')}>
                                            Puzzles
                                        </a>
                                    </li>
                                </Fragment>
                            ) : (
                                <li>
                                    <a className="nav-bar-button active" onClick={handleRoute('/home')}>
                                        Home
                                    </a>
                                </li>
                            )}
                            <li>
                                <a className="nav-bar-button" onClick={handleRoute('/house-of-fame')}>
                                    House of Fame
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-container-right">
                        <ul>
                            {isLogged ? (
                                <Fragment key={numberGenerator()}>
                                    <li>
                                        <a className="nav-bar-button" onClick={handleRoute('/social')}>
                                            Social
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-bar-button" onClick={handleRoute('/profile')}>
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-bar-button" onClick={handleRoute('/logout')}>
                                            Logout
                                        </a>
                                    </li>
                                </Fragment>
                            ) : (
                                <Fragment key={numberGenerator()}>
                                    <li>
                                        <a className="nav-bar-button" onClick={handleRoute('/register')}>
                                            Register
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-bar-button" onClick={handleRoute('/login')}>
                                            Login
                                        </a>
                                    </li>
                                </Fragment>
                            )}
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
}

export default connect(mapStateToProps)(Header);
