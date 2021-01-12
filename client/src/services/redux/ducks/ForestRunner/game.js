const PLAYER_SET_MOVEMENT = 'react-softuni-project/forest-runner/game/set-movement';

const SET_GAME_TIMER = 'react-softuni-project/forest-runner/game/SET_GAME_TIMER'; // GAME_TIMER_STATE :popup have some need fix

const FINISH_GAME_LEVEL = 'react-softuni-project/forest-runner/game/FINISH_GAME_LEVEL';
const RESET_GAME_LEVEL = 'react-softuni-project/forest-runner/game/RESET_GAME_LEVEL';

const SAVE_GAME_ITEMS = 'react-softuni-project/forest-runner/game/SAVE_GAME_ITEMS';
const SET_TIME = 'react-softuni-project/forest-runner/game/SET_TIME';
const START_GAME_LEVEL = 'react-softuni-project/forest-runner/game/START_GAME_LEVEL'; // START_THE_GAME
const GAME_TIMER_STATE = 'react-softuni-project/forest-runner/game/GAME_TIMER_STATE';

const initialState = {
    inGame: false,
    gold: 0,
    item: [],
    time: 0,
    handleGameTimer: false,
    level: 1,
    gameItems: [],
    inventorySellItem: false,
    inventoryEquipItem: false,
    characterRemoveItem: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // { SET_GAME_TIMER }: HandleMovement & GamePopup components
        case SET_GAME_TIMER:
            return {
                ...state,
                handleGameTimer: action.payload,
            };
        // { FINISH_GAME_LEVEL, OPEN_GOLD_CHEST, OPEN_ITEM_CHEST }: HandleMovement component
        case FINISH_GAME_LEVEL:
            return {
                ...state,
                inGame: action.payload,
                // TODO this value is hardcoded need logic for next levels
                level: 2,
            };
        // { RESET_GAME_LEVEL, SAVE_GAME_ITEMS }: ForestRunner component
        case RESET_GAME_LEVEL:
            return {
                ...state,
                gold: 0,
                item: [],
                time: 0,
            };
        case SAVE_GAME_ITEMS:
            return {
                ...state,
                gameItems: action.payload,
            };
        // { SET_TIME }: Timer component
        case SET_TIME:
            return {
                ...state,
                time: action.payload,
            };
        // { START_GAME_LEVEL }: GamePopup component
        case START_GAME_LEVEL:
            return {
                ...state,
                inGame: action.payload,
            };
        case 'CHARACTER_SELL_ITEM':
            return {
                ...state,
                inventorySellItem: action.payload,
            };
        case 'CHARACTER_EQUIP_ITEM':
            return {
                ...state,
                inventoryEquipItem: action.payload,
            };
        case 'CHARACTER_REMOVE_ITEM':
            return {
                ...state,
                characterRemoveItem: action.payload,
            };
        default:
            return state;
    }
}

// functions used in HandleMovement component
export const finishGameLevel = () => ({
    type: FINISH_GAME_LEVEL,
    payload: false,
});

export const setGameTimer = () => {
    return {
        start: () => ({
            type: SET_GAME_TIMER,
            payload: true,
        }),
        stop: () => ({
            type: SET_GAME_TIMER,
            payload: false,
        }),
    };
};

// functions used in ForestRunner component
export const resetGameLevel = () => ({
    type: RESET_GAME_LEVEL,
});

export const saveGameItems = (data) => ({
    type: SAVE_GAME_ITEMS,
    payload: data,
});

// functions used in Timer component
export const setTime = (data) => ({
    type: SET_TIME,
    payload: data,
});

// functions used in GamePopup component
export const setGameStart = () => ({
    type: START_GAME_LEVEL,
    payload: true,
});
