import { Fragment } from 'react';
import { connect } from 'react-redux';
import numberGenerator from '../../utils/numberGenerator';
import Button from '../Button';

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
                                        <Button buttonClass="nav-bar-button active" direction="game" buttonName="Game" />
                                    </li>
                                    <li>
                                        <Button buttonClass="nav-bar-button active" direction="games" buttonName="Games" />
                                    </li>
                                    <li>
                                        <Button buttonClass="nav-bar-button active" direction="puzzles" buttonName="Puzzles" />
                                    </li>
                                </Fragment>
                            ) : (
                                <li>
                                    <Button buttonClass="nav-bar-button active" direction="home" buttonName="Home" />
                                </li>
                            )}
                            <li>
                                <Button buttonClass="nav-bar-button" direction="house-of-fame" buttonName="House of Fame" />
                            </li>
                        </ul>
                    </li>

                    <li className="nav-container-right">
                        <ul>
                            {isLogged ? (
                                <Fragment key={numberGenerator()}>
                                    <li>
                                        <Button buttonClass="nav-bar-button" direction="social" buttonName="Social" />
                                    </li>
                                    <li>
                                        <Button buttonClass="nav-bar-button" direction="profile" buttonName="Profile" />
                                    </li>
                                    <li>
                                        <Button buttonClass="nav-bar-button" direction="logout" buttonName="Logout" />
                                    </li>
                                </Fragment>
                            ) : (
                                <Fragment key={numberGenerator()}>
                                    <li>
                                        <Button buttonClass="nav-bar-button" direction="register" buttonName="Register" />
                                    </li>
                                    <li>
                                        <Button buttonClass="nav-bar-button" direction="login" buttonName="Login" />
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
