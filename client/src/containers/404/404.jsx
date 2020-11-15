import handleRoute from '../../utils/handleRoutes';
import './404.css';

export default function FourOFour() {
    return (
        <div className="error-container">
            <h1>Oops! Page not found</h1>
            <h2>404</h2>
            <p>
                <b>We can't find the page you're looking for</b>
            </p>
            <button className="active-button" name="404" onClick={handleRoute('/home')}>
                Go Back Home
            </button>
        </div>
    );
}
