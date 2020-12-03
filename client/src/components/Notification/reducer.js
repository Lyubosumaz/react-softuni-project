import { generalActions } from './actions';

const initialState = {
    notifications: [{ msg: 'lol' }],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case generalActions.ADD_NEW_NOTIFICATION:
            console.log(action.payload);
            return {
                ...state,
                notifications: [...state.notifications, action.payload],
            };
        default:
            return state;
    }
};

export default userReducer;
