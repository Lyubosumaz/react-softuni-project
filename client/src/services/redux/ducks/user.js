const USER_LOGGED_IN = 'react-softuni-project/user/logged-in';
const USER_LOGGED_OUT = 'react-softuni-project/user/logged-out';

const initialState = {
    isLogin: false,
    userId: null,
    userName: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                isLogin: true,
                userId: action.payload._id,
                userName: action.payload.username,
            };
        case USER_LOGGED_OUT:
            return initialState;
        default:
            return state;
    }
}

export function setLoginValue(data) {
    return {
        type: USER_LOGGED_IN,
        payload: data,
    };
}

export function setLogoutValue() {
    return { type: USER_LOGGED_OUT };
}
