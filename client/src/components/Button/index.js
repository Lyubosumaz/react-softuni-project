import { handleRoute } from '../../utils/history';

export default function Button({ buttonClass, direction, buttonName }) {
    return (
        <button className={`${buttonClass}`} onClick={handleRoute(`/${direction}`)}>
            {buttonName}
        </button>
    );
}
