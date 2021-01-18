import { httpGame } from '../../../http';
import { handlePopupEnd, handlePopupStart } from '../popup';
import { toggleTimer } from '../timer';
import { nextLevel, openItemChest, resetLevel, toggleInGame } from './game';
import { resetLocation } from './player';

export function initialGameLoad() {
    return (dispatch) => {
        // toggleInGameOff();
        // displayPopupStart();
        // resetLocationProps();
        // resetLevelProps();
    };
}

export function popupStartGame() {
    return (dispatch) => {
        dispatch(toggleInGame().on());
        dispatch(toggleTimer().start());

        dispatch(handlePopupStart().close());
    };
}

export function popupEndGame() {
    return (dispatch, getState) => {
        dispatch(handlePopupEnd().close());

        dispatch(nextLevel(getState().game.level));
        dispatch(resetLocation());
        dispatch(resetLevel());

        dispatch(handlePopupStart().display());
    };
}

export function finalTile() {
    return (dispatch, getState) => {
        console.log(getState().game.item.length);
        Promise.all([
            // dispatch only if arr is empty
            !getState().game.item.length ? dispatch(openItemChest({ itemName: "You didn't loot anything" })) : null,
            // stops the timer
            dispatch(toggleTimer().stop()),
        ]).then(() => {
            // TODO after http request reworking
            httpGame.save({
                totalGold: getState().game.gold, // pickedGold
                totalItem: getState().game.item, // pickedItem
                totalTime: getState().timer.time,
                level: getState().game.level, // currentLevel
            });

            dispatch(handlePopupEnd().display());
            dispatch(toggleInGame().off());
        });
    };
}
