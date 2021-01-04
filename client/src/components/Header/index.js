import { Fragment, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { numberGenerator } from '../../utils/numberGenerator';
import Button from '../Button';

function Header({ isLogin }) {
    const [activated, setActivated] = useState();
    const isLogged = isLogin;

    function handleCallBack(data) {
        // currentTarget.classList.add('isClicked');
        console.log(data);
        setActivated(data);
    }

    return (
        <header className="site-header">
            <nav className="site-navigation">
                <ul>
                    <li className="nav-container-left">
                        <ul>
                            {isLogged ? (
                                <Fragment key={numberGenerator()}>
                                    <li>{activated ? <Button additionalClassName="nav-bar-button active" buttonText="Game" direction="game" callbackButtonText={handleCallBack} isClicked={true} /> : <Button additionalClassName="nav-bar-button active" buttonText="Game" direction="game" callbackButtonText={handleCallBack} />}</li>
                                    {/* <li>{activated === 'games' ? <Button additionalClassName="nav-bar-button active" buttonText="Games" direction="games" /> : <Button additionalClassName="nav-bar-button active" buttonText="Games" direction="games" />}</li> */}
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

Header.propTypes = {
    isLogin: PropTypes.bool.isRequired,
};
