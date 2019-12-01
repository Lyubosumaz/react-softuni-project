import React from 'react';
import { connect } from 'react-redux';
import handleMovement from './movement';
import fullSprite from './full_sprite.png';

function Player(props) {

    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${fullSprite}')`,
                backgroundPosition: '0 0',
                width: '64px',
                height: '64px',
            }}>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        ...state.player,
    };
}

export default connect(mapStateToProps)(handleMovement(Player));


