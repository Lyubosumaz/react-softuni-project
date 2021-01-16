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
    const action = { type: POPUP_HANDLE_POPUP_START };

    return {
        display: () => ({ ...action, payload: true }),
        close: () => ({ ...action, payload: false }),
    };
}

export function handlePopupEnd() {
    const action = { type: POPUP_HANDLE_POPUP_END };

    return {
        display: () => ({ ...action, payload: true }),
        close: () => ({ ...action, payload: false }),
    };
}
