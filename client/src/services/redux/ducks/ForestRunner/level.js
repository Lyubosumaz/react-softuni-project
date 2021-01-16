import { httpGame } from '../../../http';

const LEVEL_START = 'react-softuni-project/forest-runner/level/state';
const LEVEL_RESET = 'react-softuni-project/forest-runner/level/reset';
const LEVEL_NEXT = 'react-softuni-project/forest-runner/level/next';
const LEVEL_SAVE = 'react-softuni-project/forest-runner/level/save';
const LEVEL_SAVE_SUCCEEDED = 'react-softuni-project/forest-runner/level/save-succeeded';
const LEVEL_SAVE_FAILED = 'react-softuni-project/forest-runner/level/save-failed';

const initialState = {
    fetchedAllItems: [],
    inGame: false,
    gold: 0,
    item: [],
    level: 1,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LEVEL_START:
            return {
                ...state,
                inGame: action.payload,
            };
        case LEVEL_RESET:
            return {
                ...state,
                gold: 0,
                item: [],
            };
        case LEVEL_NEXT:
            return {
                ...state,
                level: typeof action.payload === 'number' ? (action.payload++ >= 3 ? 1 : action.payload++) : 1,
            };
        default:
            return state;
    }
}

export function startLevel() {
    return {
        type: LEVEL_START,
        payload: true,
    };
}

export function resetLevel() {
    return { type: LEVEL_RESET };
}

export function nextLevel(data) {
    return {
        type: LEVEL_NEXT,
        payload: data,
    };
}

export function saveLevel() {
    return (dispatch, getState) => {
        dispatch({ type: LEVEL_SAVE });

        // TODO backend renaming maybe!?
        httpGame
            .save({
                totalGold: getState().game.gold, // pickedGold
                totalItem: getState().game.item, // pickedItem
                totalTime: getState().timer.time,
                level: getState().game.level, // currentLevel
            })
            .then((response) => {
                console.log(response);
                dispatch({ type: LEVEL_SAVE_SUCCEEDED, payload: response });
            })
            .catch((error) => dispatch({ type: LEVEL_SAVE_FAILED, error: error }));
    };
}
