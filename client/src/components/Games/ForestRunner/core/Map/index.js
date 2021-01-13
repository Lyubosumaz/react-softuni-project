import { PropTypes } from 'prop-types';
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
            return 'stone';
        case 5:
            return 'snow-rock';
        case 6:
            return 'tree';
        case 7:
            return 'pine-tree';
        case 8:
            return 'apple-tree';
        case 9:
            return 'oak-tree';
        default:
            break;
    }
}

function MapTile({ tile }) {
    return (
        <div
            className={`tile ${getTileSprite(tile)}`}
            style={{
                height: SPRITE_SIZE,
                width: SPRITE_SIZE,
            }}
        />
    );
}

function MapRow({ tiles }) {
    return <div className="row">{tiles.length && tiles.map((tile, index) => <MapTile key={index} tile={tile} />)}</div>;
}

function Map({ tiles }) {
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '1600px',
                height: '650px',
                border: '4px solid black',
            }}
        >
            {tiles.length && tiles.map((row, index) => <MapRow key={index} tiles={row} />)}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles,
    };
}

export default connect(mapStateToProps)(Map);

MapTile.propTypes = {
    tile: PropTypes.number.isRequired,
};

MapRow.propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Map.propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number).isRequired).isRequired,
};
