import { generalActions } from './actions';
import { indexGenerator } from '../../utils/numberGenerator';

const initialState = {
    notifications: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case generalActions.ADD_NEW_NOTIFICATION:
            return {
                ...state,
                notifications: [...state.notifications, { ...action.payload, id: indexGenerator() }],
            };
        case generalActions.REMOVE_NOTIFICATION:
            return {
                ...state,
                notifications: state.notifications[action.payload] ? [...state.notifications.slice(0, action.payload), ...state.notifications.slice(action.payload + 1, state.notifications.length)] : state.notifications,
            };
        case generalActions.REMOVE_ALL_NOTIFICATION:
            return {
                ...state,
                notifications: [],
            };
        default:
            return state;
    }
};

export default userReducer;
