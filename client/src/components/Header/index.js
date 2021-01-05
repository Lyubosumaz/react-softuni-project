import { Fragment, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { numberGenerator } from '../../utils/numberGenerator';
import Button from '../Button';

function Header({ isLogin }) {
    const [activated, setActivated] = useState();
    const isLogged = isLogin;

    function handleCallBack(buttonDirection) {
        setActivated(buttonDirection);
    }

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function factorButtons(direction, buttonText, additionalClass) {
        const buttonStyles = 'nav-bar-button';

        const options = {
            buttonClass: !additionalClass ? buttonStyles : `${buttonStyles} ${additionalClass}`,
            buttonText: buttonText ? buttonText : capitalizeFirstLetter(direction),
            direction: direction,
            callbackButtonText: handleCallBack,
            isClicked: activated === direction ? true : false,
        };

        return <Button {...options} />;
    }

    return (
        <header className="site-header">
            <nav className="site-navigation">
                <ul>
                    <li className="nav-container-left">
                        <ul>
                            {isLogged ? (
                                <Fragment key={numberGenerator()}>
                                    <li>{factorButtons('game', null, 'active')}</li>
                                    <li>{factorButtons('games', null, 'active')}</li>
                                    <li>{factorButtons('puzzles', null, 'active')}</li>
                                </Fragment>
                            ) : (
                                <li>{factorButtons('home', 'active')}</li>
                            )}
                            <li>{factorButtons('house-of-fame', 'House of Fame')}</li>
                        </ul>
                    </li>

                    <li className="nav-container-right">
                        <ul>
                            {isLogged ? (
                                <Fragment key={numberGenerator()}>
                                    <li>{factorButtons('social')}</li>
                                    <li>{factorButtons('profile')}</li>
                                    <li>{factorButtons('logout')}</li>
                                </Fragment>
                            ) : (
                                <Fragment key={numberGenerator()}>
                                    <li>{factorButtons('register')}</li>
                                    <li>{factorButtons('login')}</li>
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
