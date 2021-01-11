import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { tiles } from '../data/maps/1';
import { setTiles } from '../map/actions';
import Map from '../map/Map';
import Player from '../player/Player';

function World({ setTiles }) {
    //TODO level system
    // switch (props.level) {
    //     case 1:
    //         console.log(1)
    //         return props.setTiles({tiles1});
    //     case 2:
    //         console.log(2)
    //         return props.setTiles({tiles2});
    //     default:
    //         break;
    // }

    setTiles({ tiles });

    return (
        <div
            style={{
                position: 'relative',
                width: '1650px',
                height: '650px',
                margin: '20px auto',
            }}
        >
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
        setTiles: (data) => dispatch(setTiles(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(World);

World.propTypes = {
    setTiles: PropTypes.func.isRequired,
};
