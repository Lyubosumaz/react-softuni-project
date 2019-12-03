import React from 'react';
import { connect } from 'react-redux';
import { SPRITE_SIZE } from '../../constants';
import './map.css';

function getTileSprite(type) {
    switch (type) {
        case 0:
            return 'grass';
        case 1:
            return 'final';
        case 2:
            return 'treasure-gold';
        case 3:
            return 'treasure-item';
        case 4:
        //TODO return 'stone';
        case 5:
            return 'rock';
        case 6:
            return 'tree';
        case 7:
        //TODO return 'pine-tree';
        case 8:
        //TODO return 'apple-tree';
        case 9:
        //TODO return 'oak-tree';
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

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map);