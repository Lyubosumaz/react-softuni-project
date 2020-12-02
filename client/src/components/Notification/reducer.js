import { generalActions } from './actions';

const initialState = {
    notifications: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case generalActions.ADD_NEW_NOTIFICATION:
            console.log(action.payload);
            return {
                ...state,
                // notifications: [...notifications, action.payload],
            };
        default:
            return state;
    }
};

export default userReducer;
