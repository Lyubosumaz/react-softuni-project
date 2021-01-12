import { notificationType } from '../../../utils/notification-type.json';
import { indexGenerator } from '../../../utils/stringHandler';

const NOTIFICATION_ADD_NEW = 'react-softuni-project/notification/add-new';
const NOTIFICATION_REMOVE_ALL = 'react-softuni-project/notification/remove-all';

const initialState = {
    notifications: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NOTIFICATION_ADD_NEW:
            return {
                ...state,
                notifications: [...state.notifications, action.payload],
            };
        case NOTIFICATION_REMOVE_ALL:
            return {
                ...state,
                notifications: [],
            };
        default:
            return state;
    }
}

export function setNotification(data) {
    const action = {
        type: NOTIFICATION_ADD_NEW,
        payload: {
            msg: data.message ? data.message : data,
            title: '', // TODO eventually
            _id: indexGenerator(),
        },
    };

    return {
        success: () => ({ ...action, ...(action.payload.options = notificationType.success) }),
        info: () => ({ ...action, ...(action.payload.options = notificationType.info) }),
        error: () => ({ ...action, ...(action.payload.options = notificationType.error) }),
    };
}

export function removeAllNotification() {
    return { type: NOTIFICATION_REMOVE_ALL };
}
