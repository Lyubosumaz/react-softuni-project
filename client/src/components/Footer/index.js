import { handleRoute } from '../../utils/history';
import Button from '../Button';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-wrapper">
                <p className="copy-write">Lyubosumaz SoftUni Final Project. All rights reserved &copy; 2019-2021</p>

                <ul className="footer-nav">
                    <li>
                        <Button buttonClass="footer-nav-button" direction="home" buttonName="Home" />
                        <button className="footer-nav-button" onClick={handleRoute('/home')}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button className="footer-nav-button" onClick={handleRoute('/about')}>
                            About
                        </button>
                    </li>
                    <li>
                        <button className="footer-nav-button" onClick={handleRoute('/terms-and-conditions')}>
                            Terms
                        </button>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
