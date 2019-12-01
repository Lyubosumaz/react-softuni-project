import React from 'react';
import Map from '../map/Map';
import Player from '../player/Player';

import { tiles } from '../data/maps/1';

export default function World() {
    return (
        <div
            style={{
                position: 'relative',
                width: '1650px',
                height: '650px',
                margin: '20px auto'
            }}>
            <Map tiles={tiles} />
            <Player />
        </div>
    );
}