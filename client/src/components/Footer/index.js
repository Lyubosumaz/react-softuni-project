import { handleRoute } from '../../utils/history';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-wrapper">
                <p className="copy-write">Lyubosumaz SoftUni Final Project. All rights reserved &copy; 2019-2021</p>

                <ul className="footer-nav">
                    <li>
                        <button className="footer-nav-button" onClick={handleRoute('/home')}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button className="footer-nav-button" onClick={handleRoute('/about')}>
                            About
                        </button>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
