import { generalActions } from './actions';

const initialState = {
    tiles: [],
};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case generalActions.SET_TILES:
            return {
                ...action.payload,
            };
        default:
            return state;
    }
};

export default mapReducer;
