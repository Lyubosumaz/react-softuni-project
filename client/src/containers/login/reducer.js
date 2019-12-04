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
        default:
            return state;
    }
}

export default loginReducer;