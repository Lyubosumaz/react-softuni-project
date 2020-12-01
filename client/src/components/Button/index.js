import { handleRoute } from '../../utils/history';

export default function Button({ additionalClassName, buttonText, direction, functionPressButton }) {
    return direction ? (
        <button className={`${additionalClassName}`} onClick={handleRoute(`/${direction}`)}>
            <span>{buttonText}</span>
        </button>
    ) : (
        <button className={`${additionalClassName}`} onClick={functionPressButton}>
            <span>{buttonText}</span>
        </button>
    );
}
