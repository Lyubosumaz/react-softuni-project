import { handleRoute } from '../../utils/history';

export default function Button({ additionalClassName, buttonText, direction, functionPressButton }) {
    return direction ? (
        <button className={`site-main-btn ${additionalClassName}`} onClick={handleRoute(`/${direction}`)}>
            <span>{buttonText}</span>
        </button>
    ) : (
        <button className={`site-main-btn ${additionalClassName}`} onClick={functionPressButton}>
            <span>{buttonText}</span>
        </button>
    );
}
