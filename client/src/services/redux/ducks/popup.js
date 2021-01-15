const POPUP_HANDLE_POPUP_START = 'react-softuni-project/forest-runner/popup/handle-popup-start';
const POPUP_HANDLE_POPUP_END = 'react-softuni-project/forest-runner/popup/handle-popup-end';

const initialState = {
    gamePopupStart: false,
    gamePopupEnd: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case POPUP_HANDLE_POPUP_START:
            return {
                ...state,
                gamePopupStart: action.payload,
            };
        case POPUP_HANDLE_POPUP_END:
            return {
                ...state,
                gamePopupEnd: action.payload,
            };
        default:
            return state;
    }
}

export function handlePopupStart() {
    return {
        display: () => ({
            type: POPUP_HANDLE_POPUP_START,
            payload: true,
        }),
        close: () => ({
            type: POPUP_HANDLE_POPUP_START,
            payload: false,
        }),
    };
}

export function handlePopupEnd() {
    return {
        display: () => ({
            type: POPUP_HANDLE_POPUP_END,
            payload: true,
        }),
        close: () => ({
            type: POPUP_HANDLE_POPUP_END,
            payload: false,
        }),
    };
}
