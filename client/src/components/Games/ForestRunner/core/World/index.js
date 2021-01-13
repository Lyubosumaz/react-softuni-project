import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setTiles } from '../../../../../services/redux/ducks/ForestRunner/map';
import Map from '../Map';
import { tiles } from '../Map/levels/1/index';
import Player from '../Player';

function World({ setTilesProps }) {
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

    setTilesProps({ tiles });

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
        setTilesProps: (data) => dispatch(setTiles(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(World);

World.propTypes = {
    setTilesProps: PropTypes.func.isRequired,
};
