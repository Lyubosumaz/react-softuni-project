import Button from '../components/Button';
import { capitalizeFirstLetter } from './stringHandler';

function factorButtons({ activated, handleCallBack, buttonStyles }) {
    return function (direction, buttonText, additionalClass) {
        const options = {
            buttonClass: !additionalClass ? buttonStyles : `${buttonStyles} ${additionalClass}`,
            buttonText: buttonText ? buttonText : capitalizeFirstLetter(direction),
            direction: direction,
            callbackButtonText: handleCallBack,
            isClicked: activated === direction ? true : false,
        };

        return <Button {...options} />;
    };
}

export { factorButtons };
