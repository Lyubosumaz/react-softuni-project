import { Fragment } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { connect } from 'react-redux';
import { httpGame } from '../../../../../services/http';
import { store } from '../../../../../services/store';
import { setNotification } from '../../../../Notification/actions';
import { finishGameLevel, openGoldChest, openItemChest, stopGameTimer } from '../../actions'; // game reducer
import { MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE } from '../../constants';
// TODO this should be selectable
import { tiles } from '../data/maps/2';
import { setTiles } from '../map/actions'; // map reducer
import { changeMovement } from './actions'; // player reducer

function HandleMovement({ children, changeMovement, setTiles, stopGameTimer, openGoldChest, openItemChest, finishGameLevel, setNotificationSuccess }) {
    function getNewPosition(oldPos, direction) {
        switch (direction) {
            case 'WEST':
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
            case 'NORTH':
                return [oldPos[0], oldPos[1] - SPRITE_SIZE];
            case 'EAST':
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
            case 'SOUTH':
                return [oldPos[0], oldPos[1] + SPRITE_SIZE];
            default:
                break;
        }
    }

    function getSpriteLocation(direction, walkIndex) {
        switch (direction) {
            case 'WEST':
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;
            case 'NORTH':
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
            case 'EAST':
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
            case 'SOUTH':
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
            default:
                break;
        }
    }

    function getWalkIndex() {
        const walkIndex = store.getState().player.walkIndex;
        return walkIndex >= 7 ? 0 : walkIndex + 1;
    }

    function observeBoundaries(newPos) {
        return newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE && newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE;
    }

    function observeImpassable(newPos) {
        const tiles = store.getState().map.tiles;
        const y = newPos[1] / SPRITE_SIZE;
        const x = newPos[0] / SPRITE_SIZE;
        const nextTile = tiles[y][x];
        return nextTile;
    }

    function dispatchMove(direction, newPos) {
        const walkIndex = getWalkIndex();
        const spriteLocation = getSpriteLocation(direction, walkIndex);

        changeMovement(newPos, direction, walkIndex, spriteLocation);
    }

    function attemptMove(direction) {
        const oldPos = store.getState().player.position;
        const newPos = getNewPosition(oldPos, direction);

        if (observeBoundaries(newPos) && observeImpassable(newPos) < 4) {
            handleCurrentTile(observeImpassable(newPos));
            dispatchMove(direction, newPos);
        }
    }

    function handleKeyDown(e) {
        e.preventDefault();

        switch (e.keyCode) {
            case 37:
                return attemptMove('WEST');
            case 38:
                return attemptMove('NORTH');
            case 39:
                return attemptMove('EAST');
            case 40:
                return attemptMove('SOUTH');
            default:
                break;
        }
    }

    function handleCurrentTile(tile) {
        switch (tile) {
            case 1:
                if (!store.getState().game.item.length) openItemChest({ itemName: "You didn't loot anything" });

                Promise.resolve(stopGameTimer())
                    .then(() => {
                        httpGame.save({
                            totalGold: store.getState().game.gold,
                            totalItem: store.getState().game.item,
                            totalTime: store.getState().game.time,
                            level: store.getState().game.level,
                        });

                        setNotificationSuccess('Welcome the next level!');

                        finishGameLevel();

                        setTiles({ tiles });
                    })
                    .catch((err) => {
                        console.error(err);
                    });
                break;
            case 2:
                if (store.getState().game.gold > 0) return;

                const gold = Math.floor(Math.random() * 10 + 1);
                openGoldChest(gold);

                setNotificationSuccess(`You have picked up ${gold} gold!`);
                break;
            case 3:
                if (store.getState().game.item.length > 0) return;

                const item = store.getState().game.gameItems[Math.ceil(Math.random() * 7)];
                openItemChest(item);

                setNotificationSuccess(`You have found ${item.itemName}!`);
                break;
            default:
                break;
        }
    }

    return (
        <Fragment>
            <KeyboardEventHandler handleKeys={['left', 'right', 'up', 'down']} onKeyEvent={(_, e) => handleKeyDown(e)} />
            {children}
        </Fragment>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        changeMovement: (newPos, direction, walkIndex, spriteLocation) => dispatch(changeMovement(newPos, direction, walkIndex, spriteLocation)),
        setTiles: (data) => dispatch(setTiles(data)),
        stopGameTimer: () => dispatch(stopGameTimer()),
        openGoldChest: (data) => dispatch(openGoldChest(data)),
        openItemChest: (data) => dispatch(openItemChest(data)),
        finishGameLevel: () => dispatch(finishGameLevel()),
        setNotificationSuccess: (data) => dispatch(setNotification().success(data)),
    };
}

export default connect(null, mapDispatchToProps)(HandleMovement);
