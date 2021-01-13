import { connect } from 'react-redux';
import HandleMovement from './HandleMovement.jsx';
import walkSprite from './sprite/player_walk.png';

function Player(props) {
    return (
        <HandleMovement>
            <div
                style={{
                    position: 'absolute',
                    top: props.position[1],
                    left: props.position[0],
                    backgroundImage: `url('${walkSprite}')`,
                    backgroundPosition: props.spriteLocation,
                    width: '64px',
                    height: '64px',
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
