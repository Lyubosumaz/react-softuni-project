import { httpGame } from '../../../http';
import { handlePopupStart } from '../popup';
import { toggleTimer } from '../timer';
import { toggleInGame } from './game';

const GAME_SAVE_LEVEL = 'react-softuni-project/forest-runner/game/save-level';
const GAME_SAVE_LEVEL_SUCCEEDED = 'react-softuni-project/forest-runner/game/save-level-succeeded';
const GAME_SAVE_LEVEL_FAILED = 'react-softuni-project/forest-runner/game/save-level-failed';

export function popupStartGame() {
    return (dispatch, getState) => {
        dispatch(toggleInGame().on());
        dispatch(toggleTimer().start());
        dispatch(handlePopupStart().close());
    };
}

export function saveLevel() {
    return (dispatch, getState) => {
        // toggleTimer().stop();
        console.log('gold', getState().game.gold, 'item', getState().game.item, 'time', getState().timer.time, 'level', getState().game.level);
        dispatch({ type: GAME_SAVE_LEVEL });

        // TODO backend renaming maybe!?
        httpGame
            .save({
                totalGold: getState().game.gold, // pickedGold
                totalItem: getState().game.item, // pickedItem
                totalTime: getState().timer.time,
                level: getState().game.level, // currentLevel
            })
            .then((response) => {
                dispatch({ type: GAME_SAVE_LEVEL_SUCCEEDED, payload: response });

                console.log('thunk');

                // handlePopupEnd().display();

                // TODO after http request reworking

                // TODO these functions need reworking
                // toggleStateOff();
                // nextLevelProps(gameLevel);
                // setNotificationSuccess('Welcome the next level!');
                // resetLevelProps();
                // resetLocationProps();
            })
            .catch((error) => dispatch({ type: GAME_SAVE_LEVEL_FAILED, error: error }));
    };
}
