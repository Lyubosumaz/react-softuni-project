import { handleRoute } from '../../utils/history';

export default function Button({ additionalClassName, buttonText, direction }) {
    return direction ? (
        <button className={`site-main-btn ${additionalClassName}`} onClick={handleRoute(`/${direction}`)}>
            <span>{buttonText}</span>
        </button>
    ) : (
        <button className={`site-main-btn ${additionalClassName}`}>
            <span>{buttonText}</span>
        </button>
    );
}
