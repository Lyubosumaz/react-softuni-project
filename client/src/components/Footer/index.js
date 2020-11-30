import Button from '../Button';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-wrapper">
                <p className="copy-write">Lyubosumaz SoftUni Final Project. All rights reserved &copy; 2019-2021</p>

                <ul className="footer-nav">
                    <li>
                        <Button buttonClass="footer-nav-button" direction="home" buttonName="Home" />
                    </li>
                    <li>
                        <Button buttonClass="footer-nav-button" direction="about" buttonName="About" />
                    </li>
                    <li>
                        <Button buttonClass="footer-nav-button" direction="terms-and-conditions" buttonName="Terms" />
                    </li>
                </ul>
            </div>
        </footer>
    );
}
