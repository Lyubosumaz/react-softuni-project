import { history, handleRoute } from '../../utils/history';
import { currentPagePathList } from '../../utils/currentPage';

export default function Button({ buttonClass, buttonText, direction, functionPressButton, callbackButtonText, isClicked }) {
    // const [isClicked, setClicked] = useState(false);
    console.log('1', buttonClass, '2', buttonText, '3', direction, '4', functionPressButton, '5', callbackButtonText, '6', isClicked);

    function changeStyles(currentTarget) {
        // setClicked(!isClicked);
        const pathList = currentPagePathList();
        console.log(pathList);

        // currentTarget.classList.add('isClicked');
        // for (const iterator of pathList) {
        //     if (iterator.toLocaleLowerCase() === buttonText.toLocaleLowerCase()) {
        //         console.log(event.target.classList.add('isClicked'), iterator);
        //     }
        // }
    }

    return direction ? (
        <button
            className={`${buttonClass} ${isClicked ? 'isClicked' : ''}`}
            onClick={(event) => {
                event.preventDefault();
                // console.log(event.currentTarget);
                // handleRoute(`/${direction}`);
                history.push(`/${direction}`);
                changeStyles(event.currentTarget);
                callbackButtonText(direction);
            }}
        >
            <span>{buttonText}</span>
        </button>
    ) : (
        <button className={`${buttonClass}`} onClick={functionPressButton}>
            <span>{buttonText}</span>
        </button>
    );
}
