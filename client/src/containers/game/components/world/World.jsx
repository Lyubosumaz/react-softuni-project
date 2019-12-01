import React from 'react';
import Map from '../map/Map';
import Player from '../player/Player';

export default function World() {
    return (
        <div
            style={{
                position: 'relative',
                width: '1540px',
                height: '630px',
                margin: '20px auto'
            }}>
            <Map />
            <Player />
        </div>
    );
}