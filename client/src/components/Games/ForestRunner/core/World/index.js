import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setTiles } from '../../../../../services/redux/ducks/ForestRunner/map';
import Map from '../Map';
import { tiles as levelOne } from '../Map/levels/1';
import { tiles as levelTwo } from '../Map/levels/2';
import { tiles as levelThree } from '../Map/levels/3';
import Player from '../Player';

function World({ level, setTilesProps }) {
    (function () {
        switch (level) {
            case 1:
                setTilesProps({ tiles: levelOne });
                break;
            case 2:
                setTilesProps({ tiles: levelTwo });
                break;
            case 3:
                setTilesProps({ tiles: levelThree });
                break;
            default:
                break;
        }
    })();

    // setTilesProps({ tiles3 });

    return (
        <div
            className={`test-wrapper`}
            style={{
                paddingBottom: '1.2em', // TODO after fixing the nester router this is no longer needed
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#3a3a3a',
            }}
        >
            <div
                className={`World`}
                style={{
                    position: 'relative',
                    // width: '1650px',
                    // height: '650px',
                    // margin: '20px auto',
                }}
            >
                <Map />
                <Player />
            </div>
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
    level: PropTypes.number.isRequired,
    setTilesProps: PropTypes.func.isRequired,
};
