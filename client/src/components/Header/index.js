import { PropTypes } from 'prop-types';
import { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';
import { numberGenerator } from '../../utils/stringHandler';

function Header({ isLogin }) {
    const isLogged = isLogin;
    const [activated, setActivated] = useState();

    function handleCallBack(buttonDirection) {
        setActivated(buttonDirection);
    }

    const navAttributes = { activated, handleCallBack, buttonStyles: buttonClass.Header };
    const initializedNavBtn = factoryButtons(navAttributes);

    // holder for the additional button classes
    const additionalClasses = 'main-site-functionalities';

    return (
        <header className="site-header">
            <nav className="site-navigation">
                <ul>
                    <li className="nav-container-left">
                        <ul>
                            {isLogged ? (
                                <Fragment key={numberGenerator()}>
                                    <li>{initializedNavBtn('games', null, additionalClasses)}</li>
                                    <li>{initializedNavBtn('puzzles', null, additionalClasses)}</li>
                                </Fragment>
                            ) : (
                                <li>{initializedNavBtn('home', null, additionalClasses)}</li>
                            )}
                            <li>{initializedNavBtn('house-of-fame', 'House of Fame')}</li>
                        </ul>
                    </li>

                    <li className="nav-container-right">
                        <ul>
                            {isLogged ? (
                                <Fragment key={numberGenerator()}>
                                    <li>{initializedNavBtn('social')}</li>
                                    <li>{initializedNavBtn('profile')}</li>
                                    <li>{initializedNavBtn('logout')}</li>
                                </Fragment>
                            ) : (
                                <Fragment key={numberGenerator()}>
                                    <li>{initializedNavBtn('register')}</li>
                                    <li>{initializedNavBtn('login')}</li>
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
