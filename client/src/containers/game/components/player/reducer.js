const initialState = {
    position: [0, 0],
    spriteLocation: '0px 0px',
    default: 'EAST',
    walkIndex: 0,
    final: false,
    gold: 0,
    items: []
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_PLAYER':
            return {
                ...state,
                ...action.payload,
            }
        case 'OPEN_CHEST':
            return {
                ...state,
                gold: state.gold += action.payload,
            };
        case 'FINAL':
            return;
        default:
            return state;
    }
}

export default playerReducer;