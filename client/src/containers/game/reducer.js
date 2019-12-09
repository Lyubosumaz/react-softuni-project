const initialState = {
    inGame: false,
    final: false,
    gold: 0,
    item: [],
    time: 0
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START':
            return {
                ...state,
                inGame: action.payload,
            }
        case 'OPEN_GOLD_CHEST':
            return {
                ...state,
                gold: state.gold += action.payload,
            };
        case 'OPEN_ITEM_CHEST':
            return {
                ...state,
                item: state.item.concat(action.payload),
            };
        case 'GET_TIME':
            return {
                ...state,
                time: action.payload,
            };
        case 'FINAL':
            return {
                ...state,
                inGame: action.payload,
            };
        case 'RESET_GAME':
            return {
                ...state,
                final: false,
                gold: 0,
                item: [],
                time: 0
            };
        default:
            return state;
    };
};

export default gameReducer;