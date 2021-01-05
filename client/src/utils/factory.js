import { capitalizeFirstLetter } from './stringHandler';
import Button from '../components/Button';

export function factoryButtons({ activated, handleCallBack, buttonStyles }) {
    return function (direction, buttonText, additionalClass, myFunc) {
        const options = {
            buttonClass: !additionalClass ? (buttonStyles ? buttonStyles : null) : `${buttonStyles} ${additionalClass}`,
            buttonText: !buttonText ? (direction ? capitalizeFirstLetter(direction) : null) : buttonText,
            direction: direction ? direction : null,
            callbackDirection: handleCallBack ? handleCallBack : null,
            isClicked: activated === direction ? true : false,
            myFunc: myFunc ? myFunc : null,
        };

        return <Button {...options} />;
    };
}
