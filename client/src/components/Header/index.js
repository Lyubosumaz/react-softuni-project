import { Fragment } from 'react';
import { connect } from 'react-redux';
import { numberGenerator } from '../../utils/numberGenerator';
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
                                        <Button additionalClassName="nav-bar-button active" buttonText="Game" direction="game" />
                                    </li>
                                    <li>
                                        <Button additionalClassName="nav-bar-button active" buttonText="Games" direction="games" />
                                    </li>
                                    <li>
                                        <Button additionalClassName="nav-bar-button active" buttonText="Puzzles" direction="puzzles" />
                                    </li>
                                </Fragment>
                            ) : (
                                <li>
                                    <Button additionalClassName="nav-bar-button active" buttonText="Home" direction="home" />
                                </li>
                            )}
                            <li>
                                <Button additionalClassName="nav-bar-button" buttonText="House of Fame" direction="house-of-fame" />
                            </li>
                        </ul>
                    </li>

                    <li className="nav-container-right">
                        <ul>
                            {isLogged ? (
                                <Fragment key={numberGenerator()}>
                                    <li>
                                        <Button additionalClassName="nav-bar-button" buttonText="Social" direction="social" />
                                    </li>
                                    <li>
                                        <Button additionalClassName="nav-bar-button" buttonText="Profile" direction="profile" />
                                    </li>
                                    <li>
                                        <Button additionalClassName="nav-bar-button" buttonText="Logout" direction="logout" />
                                    </li>
                                </Fragment>
                            ) : (
                                <Fragment key={numberGenerator()}>
                                    <li>
                                        <Button additionalClassName="nav-bar-button" buttonText="Register" direction="register" />
                                    </li>
                                    <li>
                                        <Button additionalClassName="nav-bar-button" buttonText="Login" direction="login" />
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
