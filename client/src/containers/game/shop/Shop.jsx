import React from 'react';
import './shop.css';

export default function Shop() {
    return (
        <div>
            <h1>Shop</h1>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>

        </div>
    );
};