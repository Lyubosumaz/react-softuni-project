import Button from '../Button';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-wrapper">
                <p className="copy-write">Lyubosumaz SoftUni Final Project. All rights reserved &copy; 2019-2021</p>

                <ul className="footer-nav">
                    <li>
                        <Button additionalClassName="footer-nav-button" buttonText="Home" direction="home" />
                    </li>
                    <li>
                        <Button additionalClassName="footer-nav-button" buttonText="About" direction="about" />
                    </li>
                    <li>
                        <Button additionalClassName="footer-nav-button" buttonText="Terms" direction="terms-and-conditions" />
                    </li>
                </ul>
            </div>
        </footer>
    );
}
