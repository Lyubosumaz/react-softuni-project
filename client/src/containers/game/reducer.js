const initialState = {
    inGame: false,
    final: false,
    gold: 0,
    items: [],
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
            };
        case 'FINAL':
            return {
                ...state,
            };
        default:
            return state;
    };
};

export default gameReducer;