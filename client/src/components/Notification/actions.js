import { notificationType } from '../../utils/notification-type.json';
import { indexGenerator } from '../../utils/stringHandler';

export const generalActions = {
    ADD_NEW_NOTIFICATION: 'ADD_NEW_NOTIFICATION',
    REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
    REMOVE_ALL_NOTIFICATION: 'REMOVE_ALL_NOTIFICATION',
};

export const setNotification = (data) => {
    const message = data.message ? data.message : data;

    return {
        success: () => ({
            type: generalActions.ADD_NEW_NOTIFICATION,
            payload: {
                msg: message,
                _id: indexGenerator(),
                options: notificationType.success,
            },
        }),
        info: () => ({
            type: generalActions.ADD_NEW_NOTIFICATION,
            payload: {
                msg: message,
                _id: indexGenerator(),
                options: notificationType.info,
            },
        }),
        error: () => ({
            type: generalActions.ADD_NEW_NOTIFICATION,
            payload: {
                msg: message,
                _id: indexGenerator(),
                options: notificationType.error,
            },
        }),
    };
};

export const removeNotification = (data) => ({
    type: generalActions.REMOVE_NOTIFICATION,
    payload: data,
});

export const removeAllNotification = () => ({
    type: generalActions.REMOVE_ALL_NOTIFICATION,
});
