const initialState = {
    isLogin: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGGED_IN':
            return {
                ...state,
                isLogin: true,
            }
        default:
            return state;
    }
}

export default loginReducer;