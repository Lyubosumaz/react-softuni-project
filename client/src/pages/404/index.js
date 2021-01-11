import { factoryButtons } from '../../utils/factory';
import { buttonClass } from '../../utils/class-names.json';

export default function FourOFourContainer() {
    return (
        <section className="error-container">
            <header className="error-header">
                <h1>Oops! Page not found</h1>
            </header>

            <p className="huge-number">404</p>

            <section className="error-info">
                <div className="error-info-wrapper">
                    <span>We can't find the page you're looking for</span>
                    {factoryButtons({ buttonStyles: buttonClass['404'] })('home', 'Go Back Home')}
                </div>
            </section>
        </section>
    );
}
