import Button from '../../components/Button';

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
                    <Button buttonClass="info-action-btn" direction="home" buttonName="Go Back Home" />
                </div>
            </section>
        </section>
    );
}
