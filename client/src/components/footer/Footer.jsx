import history from '../../utils/history';

export default function Footer() {
    const handleRoute = (name) => (e) => {
        e.preventDefault();
        history.push(name);
    };

    return (
        <footer className="site-footer">
            <div className="site-wrapper">
                <p className="copy-write">Lyubosumaz SoftUni Final Project. All rights reserved &copy; 2019-2021</p>

                <ul className="footer-nav">
                    <li>
                        <a className="footer-nav-button" onClick={handleRoute('/home')}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="footer-nav-button" onClick={handleRoute('/about')}>
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
