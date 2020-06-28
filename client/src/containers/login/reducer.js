import { generalActions } from './actions';

const initialState = {
    isLogin: false,
    userId: null,
    userName: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case generalActions.USER_LOGGED_IN:
            return {
                isLogin: true,
                userId: action.payload._id,
                userName: action.payload.username,
            };
        case generalActions.USER_LOGGED_OUT:
            return initialState;
        default:
            return state;
    }
};

export default userReducer;
