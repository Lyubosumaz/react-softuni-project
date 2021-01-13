import { useState } from 'react';
import { connect } from 'react-redux';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';

function Footer({ inGame }) {
    const [activated, setActivated] = useState();

    function handleCallBack(buttonDirection) {
        setActivated(buttonDirection);
    }

    const footerAttributes = { activated, handleCallBack, buttonStyles: buttonClass.Footer };
    const initializedFooterBtn = factoryButtons(footerAttributes);

    return (
        <footer className={`site-footer ${inGame ? 'hidden' : ''}`}>
            <div className="site-wrapper">
                <p className="copy-write">Lyubosumaz SoftUni Final Project. All rights reserved &copy; 2019-2021</p>

                <ul className="footer-nav">
                    <li>{initializedFooterBtn('home')}</li>
                    <li>{initializedFooterBtn('about')}</li>
                    <li>{initializedFooterBtn('terms-and-conditions', 'Terms')}</li>
                </ul>
            </div>
        </footer>
    );
}

function mapStateToProps(state) {
    return {
        inGame: state.game.inGame,
    };
}

export default connect(mapStateToProps)(Footer);
