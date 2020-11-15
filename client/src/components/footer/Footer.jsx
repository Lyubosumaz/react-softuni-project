import history from '../../utils/history';
import './footer.css';

export default function Footer() {
    const handleRoute = (name) => (e) => {
        e.preventDefault();
        history.push(name);
    };

    return (
        <div className="main-footer clearfix">
            <p className="copy-write">&copy; SoftUni Lyubosumaz Final Project</p>
            <ul className="footer-nav clearfix">
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
    );
}
