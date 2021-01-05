import { useState } from 'react';
import { factoryButtons } from '../../utils/factory';

export default function Footer() {
    const [activated, setActivated] = useState();

    function handleCallBack(buttonDirection) {
        setActivated(buttonDirection);
    }

    const footerAttributes = { activated, handleCallBack, buttonStyles: 'footer-nav-button' };
    const initializedFooterBtn = factoryButtons(footerAttributes);

    return (
        <footer className="site-footer">
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
