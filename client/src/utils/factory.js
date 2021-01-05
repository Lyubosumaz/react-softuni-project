import Button from '../components/Button';
import { capitalizeFirstLetter } from './stringHandler';

function factoryButtons({ activated, handleCallBack, buttonStyles }) {
    return function (direction, buttonText, additionalClass) {
        const options = {
            buttonClass: !additionalClass ? (buttonStyles ? buttonStyles : null) : `${buttonStyles} ${additionalClass}`,
            buttonText: !buttonText ? (direction ? capitalizeFirstLetter(direction) : null) : buttonText,
            direction: direction ? direction : null,
            callbackDirection: handleCallBack ? handleCallBack : null,
            isClicked: activated === direction ? true : false,
        };

        return <Button {...options} />;
    };
}

export { factoryButtons };
