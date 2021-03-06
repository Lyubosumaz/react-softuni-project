import { PropTypes } from 'prop-types';
import { handleRoute } from '../../utils/history';

export default function Button({ direction, buttonClass, buttonText, callbackDirection, isClicked, myFunc }) {
    const handleClick = typeof direction === "string"
        ? (event) => {
            event.preventDefault();
            handleRoute(direction.substr(0, 1) === '/' ? direction : `/${direction}`);
            if (callbackDirection) callbackDirection(direction);
        }
        : myFunc;

    return (
        <button className={`${buttonClass} ${isClicked ? 'isClicked' : ''}`} onClick={handleClick}>
            <span>{buttonText}</span>
        </button>
    );
}

Button.propTypes = {
    direction: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    buttonClass: PropTypes.string,
    callbackDirection: PropTypes.func,
    isClicked: PropTypes.bool,
    myFunc: PropTypes.func,
};
