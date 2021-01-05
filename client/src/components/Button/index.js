import { handleRoute } from '../../utils/history';

export default function Button({ buttonClass, buttonText, direction, functionPressButton, callbackButtonText, isClicked }) {
    return direction ? (
        <button
            className={`${buttonClass} ${isClicked ? 'isClicked' : ''}`}
            onClick={(event) => {
                event.preventDefault();

                handleRoute(`/${direction}`);
                if (callbackButtonText) callbackButtonText(direction);
            }}
        >
            <span>{buttonText}</span>
        </button>
    ) : (
        <button className={`${buttonClass}`} onClick={functionPressButton}>
            <span>{buttonText}</span>
        </button>
    );
}
