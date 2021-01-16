import { httpGame } from '../../../http';
import { handlePopupEnd } from '../popup';
import { toggleTimer } from '../timer';

const GAME_TOGGLE = 'react-softuni-project/forest-runner/game/toggle';
const GAME_RESET_LEVEL = 'react-softuni-project/forest-runner/game/reset-level';
const GAME_NEXT_LEVEL = 'react-softuni-project/forest-runner/game/next-level';
const GAME_SAVE_ITEMS = 'react-softuni-project/forest-runner/game/save-game';
const GAME_OPEN_GOLD_CHEST = 'react-softuni-project/forest-runner/game/open-gold-chest';
const GAME_OPEN_ITEM_CHEST = 'react-softuni-project/forest-runner/game/open-item-chest';
const GAME_SAVE_LEVEL = 'react-softuni-project/forest-runner/game/save-level';
const GAME_SAVE_LEVEL_SUCCEEDED = 'react-softuni-project/forest-runner/game/save-level-succeeded';
const GAME_SAVE_LEVEL_FAILED = 'react-softuni-project/forest-runner/game/save-level-failed';

const initialState = {
    inGame: false,
    fetchedAllItems: [],
    gold: 0,
    item: [],
    level: 1,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GAME_TOGGLE:
            return {
                ...state,
                inGame: action.payload,
            };
        // TODO saves all game items in redux store, then used in open chest to get random item
        case GAME_SAVE_ITEMS:
            return {
                ...state,
                gameItems: action.payload,
            };
        case GAME_RESET_LEVEL:
            return {
                ...state,
                gold: 0,
                item: [],
            };
        case GAME_NEXT_LEVEL:
            return {
                ...state,
                level: typeof action.payload === 'number' ? (action.payload++ >= 3 ? 1 : action.payload++) : 1,
            };
        case GAME_OPEN_GOLD_CHEST:
            return {
                ...state,
                gold: (state.gold += action.payload),
            };
        case GAME_OPEN_ITEM_CHEST:
            return {
                ...state,
                item: state.item.concat(action.payload),
            };
        case GAME_SAVE_LEVEL_SUCCEEDED:
            console.log(action);
            return {
                ...state,
            };
        case GAME_SAVE_LEVEL_FAILED:
            console.log(action);
            return {
                ...state,
            };
        default:
            return state;
    }
}

export function toggleInGame() {
    const action = { type: GAME_TOGGLE };
    console.log('here toggle');

    return {
        on: () => ({ ...action, payload: true }),
        off: () => {
            console.log('here off');
            return { ...action, payload: false };
        },
    };
}

export function resetLevel() {
    return { type: GAME_RESET_LEVEL };
}

export function nextLevel(data) {
    return {
        type: GAME_NEXT_LEVEL,
        payload: data,
    };
}

export function saveItems(data) {
    return {
        type: GAME_SAVE_ITEMS,
        payload: data,
    };
}

export function openGoldChest(data) {
    return {
        type: GAME_OPEN_GOLD_CHEST,
        payload: data,
    };
}

export function openItemChest(data) {
    return {
        type: GAME_OPEN_ITEM_CHEST,
        payload: data,
    };
}

export function saveLevel() {
    return (dispatch, getState) => {
        toggleTimer().stop();
        console.log('gold', getState().game.gold, 'item', getState().game.item, 'time', getState().timer.time, 'level', getState().game.level);
        dispatch({ type: GAME_SAVE_LEVEL });

        // TODO backend renaming maybe!?
        httpGame
            .save({
                totalGold: getState().game.gold, // pickedGold
                totalItem: getState().game.item, // pickedItem
                totalTime: getState().timer.time,
                level: getState().game.level, // currentLevel
            })
            .then((response) => {
                dispatch({ type: GAME_SAVE_LEVEL_SUCCEEDED, payload: response });

                console.log('thunk');

                handlePopupEnd().display();

                // TODO after http request reworking

                // TODO these functions need reworking
                // toggleStateOff();
                // nextLevelProps(gameLevel);
                // setNotificationSuccess('Welcome the next level!');
                // resetLevelProps();
                // resetLocationProps();
            })
            .catch((error) => dispatch({ type: GAME_SAVE_LEVEL_FAILED, error: error }));
    };
}

function saveLevelSucceeded(data) {
    console.log(data);

    return {
        type: GAME_SAVE_LEVEL_SUCCEEDED,
        payload: data,
    };
}

// function saveLevelFailed(data) {
//     console.log(data);

//     return {
//         type: GAME_SAVE_LEVEL_FAILED,
//         payload: data,
//     };
// }
