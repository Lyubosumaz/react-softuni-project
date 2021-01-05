import Button from '../components/Button';
import { capitalizeFirstLetter } from './stringHandler';

function factoryButtons({ activated, handleCallBack, buttonStyles }) {
    return function (direction, buttonText, additionalClass) {
        const options = {
            buttonClass: !additionalClass ? buttonStyles : `${buttonStyles} ${additionalClass}`,
            buttonText: buttonText ? buttonText : capitalizeFirstLetter(direction),
            direction: direction,
            callbackDirection: handleCallBack,
            isClicked: activated === direction ? true : false,
        };

        return <Button {...options} />;
    };
}

export { factoryButtons };
