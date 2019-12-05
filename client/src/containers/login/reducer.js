const initialState = {
    isLogin: false,
    userId: null,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGGED_IN':
            return {
                ...state,
                isLogin: true,
                userId: action.payload._id
            }
        case 'USER_LOGGED_OUT':
            return {
                isLogin: false,
                userId: null,
            }
        default:
            return state;
    }
}

export default loginReducer;