const MAP_SET_TILES = 'react-softuni-project/forest-runner/map/set_tiles';

const initialState = {
    tiles: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case MAP_SET_TILES:
            return {
                ...action.payload,
            };
        default:
            return state;
    }
}

export function setTiles(data) {
    return {
        type: MAP_SET_TILES,
        payload: data,
    };
}
