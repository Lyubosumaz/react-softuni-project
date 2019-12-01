import React from 'react';
import { SPRITE_SIZE } from '../../constants';
import './map.css';

function getTileSprite(type) {
    switch (type) {
        case 0:
            return 'grass';
        case 5:
            return 'rock';
        case 6:
            return 'tree';
    }
}

function MapTile(props) {
    return <div
        className={`tile ${getTileSprite(props.tile)}`}
        style={{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE,
        }}
    >
        {/* {props.tile} */}
    </div>
}

function MapRow(props) {
    return (
        <div className="row">
            {
                props.tiles.map(tile => <MapTile tile={tile} />)
            }
        </div>
    );
}

function Map(props) {
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '1600px',
                height: '650px',
                border: '4px solid white',
            }}>
            {
                props.tiles.map(row => <MapRow tiles={row} />)
            }
        </div>
    )
}

export default Map;