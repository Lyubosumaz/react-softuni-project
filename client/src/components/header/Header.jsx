import { Fragment } from 'react';
import { connect } from 'react-redux';
import { handleRoute } from '../../utils/history';
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
                                        <button className="nav-bar-button active" onClick={handleRoute('/game')}>
                                            Game
                                        </button>
                                    </li>
                                    <li>
                                        <button className="nav-bar-button active" onClick={handleRoute('/games')}>
                                            Games
                                        </button>
                                    </li>
                                    <li>
                                        <button className="nav-bar-button active" onClick={handleRoute('/puzzles')}>
                                            Puzzles
                                        </button>
                                    </li>
                                </Fragment>
                            ) : (
                                <li>
                                    <button className="nav-bar-button active" onClick={handleRoute('/home')}>
                                        Home
                                    </button>
                                </li>
                            )}
                            <li>
                                <button className="nav-bar-button" onClick={handleRoute('/house-of-fame')}>
                                    House of Fame
                                </button>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-container-right">
                        <ul>
                            {isLogged ? (
                                <Fragment key={numberGenerator()}>
                                    <li>
                                        <button className="nav-bar-button" onClick={handleRoute('/social')}>
                                            Social
                                        </button>
                                    </li>
                                    <li>
                                        <button className="nav-bar-button" onClick={handleRoute('/profile')}>
                                            Profile
                                        </button>
                                    </li>
                                    <li>
                                        <button className="nav-bar-button" onClick={handleRoute('/logout')}>
                                            Logout
                                        </button>
                                    </li>
                                </Fragment>
                            ) : (
                                <Fragment key={numberGenerator()}>
                                    <li>
                                        <button className="nav-bar-button" onClick={handleRoute('/register')}>
                                            Register
                                        </button>
                                    </li>
                                    <li>
                                        <button className="nav-bar-button" onClick={handleRoute('/login')}>
                                            Login
                                        </button>
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
