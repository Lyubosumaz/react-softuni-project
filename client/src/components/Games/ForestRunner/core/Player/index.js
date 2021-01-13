import { connect } from 'react-redux';
import HandleMovement from './HandleMovement';
import walkSprite from './sprite/player_walk_48_384x192.png';

function Player(props) {
    return (
        <HandleMovement>
            <div
                style={{
                    top: props.position[1],
                    left: props.position[0],
                    backgroundPosition: props.spriteLocation,
                    backgroundImage: `url('${walkSprite}')`,
                    position: 'absolute',
                    width: '48px',
                    height: '48px',
                }}
            ></div>
        </HandleMovement>
    );
}

function mapStateToProps(state) {
    return {
        ...state.player,
    };
}

export default connect(mapStateToProps)(Player);
