import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Map from '../map/Map';
import Player from '../player/Player';

import { tiles } from '../data/maps/1';
import { store } from 'services/store';
import { setTiles } from '../map/actions';

function World(props) {

    //TODO level system
    // switch (props.level) {
    //     case 1:
    //         console.log(1)
    //         return props.setTiles(tiles1);
    //     case 2:
    //         console.log(2)
    //         return props.setTiles(tiles2);
    //     default:
    //         break;
    // }

    store.dispatch({
        type: 'ADD_TILES',
        payload: {
            tiles,
        }
    });

    return (
        <div
            style={{
                position: 'relative',
                width: '1650px',
                height: '650px',
                margin: '20px auto'
            }}>
            <Map />
            <Player />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        level: state.game.level,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setTiles: (data) => dispatch({
            type: 'ADD_TILES',
            payload: {
                data,
            }
        }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(World);
