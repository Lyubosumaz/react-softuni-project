import { handleRoute } from '../../utils/history';

export default function Button({ buttonClass, buttonText, direction, myFunc, callbackDirection, isClicked }) {
    const options = direction
        ? {
              onClick: (event) => {
                  event.preventDefault();

                  handleRoute(`/${direction}`);
                  if (callbackDirection) callbackDirection(direction);
              },
          }
        : {
              onClick: { myFunc },
          };

    return (
        <button className={`${buttonClass} ${isClicked ? 'isClicked' : ''}`} {...options}>
            <span>{buttonText}</span>
        </button>
    );
}
