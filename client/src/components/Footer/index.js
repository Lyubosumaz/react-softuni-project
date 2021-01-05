import { useState } from 'react';
import Button from '../Button';
import { factoryButtons } from '../../utils/factory';

export default function Footer() {
    const [activated, setActivated] = useState();

    function handleCallBack(buttonDirection) {
        setActivated(buttonDirection);
    }

    const navAttributes = { activated, handleCallBack, buttonStyles: 'footer-nav-button' };
    const initializedNavBtn = factoryButtons(navAttributes);

    return (
        <footer className="site-footer">
            <div className="site-wrapper">
                <p className="copy-write">Lyubosumaz SoftUni Final Project. All rights reserved &copy; 2019-2021</p>

                <ul className="footer-nav">
                    <li>{initializedNavBtn('home')}</li>
                    <li>{initializedNavBtn('about')}</li>
                    <li>{initializedNavBtn('terms-and-conditions', 'Terms')}</li>
                </ul>
            </div>
        </footer>
    );
}
