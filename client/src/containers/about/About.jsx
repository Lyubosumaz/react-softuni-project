import React from 'react';
import handleRoute from '../../utils/handleRoutes';
import './about.css';

export default function About() {
    return (
        <div className="background-image-container" name="about">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique voluptas nesciunt inventore debitis. Perspiciatis illo at suscipit! Dicta ipsum ratione possimus aperiam, adipisci molestias recusandae dolore vel quidem in animi.</p>
            <div className="info-container">
                <p>Join our social media <button className="info-button" onClick={handleRoute('/login')}>Sign in</button>.</p>
            </div>
        </div>
    );
};