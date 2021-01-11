import { generalActions } from './actions';

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

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        // { SET_GAME_TIMER }: HandleMovement & GamePopup components
        case generalActions.SET_GAME_TIMER:
            return {
                ...state,
                handleGameTimer: action.payload,
            };
        // { FINISH_GAME_LEVEL, OPEN_GOLD_CHEST, OPEN_ITEM_CHEST }: HandleMovement component
        case generalActions.FINISH_GAME_LEVEL:
            return {
                ...state,
                inGame: action.payload,
                // TODO this value is hardcoded need logic for next levels
                level: 2,
            };
        case generalActions.OPEN_GOLD_CHEST:
            return {
                ...state,
                gold: (state.gold += action.payload),
            };
        case generalActions.OPEN_ITEM_CHEST:
            return {
                ...state,
                item: state.item.concat(action.payload),
            };

        // { RESET_GAME_LEVEL, SAVE_GAME_ITEMS }: ForestRunner component
        case generalActions.RESET_GAME_LEVEL:
            return {
                ...state,
                gold: 0,
                item: [],
                time: 0,
            };
        case generalActions.SAVE_GAME_ITEMS:
            return {
                ...state,
                gameItems: action.payload,
            };
        // { SET_TIME }: Timer component
        case generalActions.SET_TIME:
            return {
                ...state,
                time: action.payload,
            };
        // { START_GAME_LEVEL }: GamePopup component
        case generalActions.START_GAME_LEVEL:
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
};

export default gameReducer;
