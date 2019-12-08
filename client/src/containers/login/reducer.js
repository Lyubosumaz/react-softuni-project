const initialState = {
    isLogin: false,
    userId: null,
    userName: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGGED_IN':
            return {
                ...state,
                isLogin: true,
                userId: action.payload._id,
                userName: action.payload.username,
            }
        case 'USER_LOGGED_OUT':
            return {
                isLogin: false,
                userId: null,
                userName: '',
            }
        default:
            return state;
    }
}

export default userReducer;