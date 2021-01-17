import { Fragment } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { connect } from 'react-redux';
import { nextLevel, openGoldChest, openItemChest, resetLevel, saveLevel, toggleInGame } from '../../../../../services/redux/ducks/ForestRunner/game';
import { setTiles } from '../../../../../services/redux/ducks/ForestRunner/map';
import { resetLocation, setMovement } from '../../../../../services/redux/ducks/ForestRunner/player';
import { setNotification } from '../../../../../services/redux/ducks/notification';
import { handlePopupEnd } from '../../../../../services/redux/ducks/popup';
import { toggleTimer } from '../../../../../services/redux/ducks/timer';
import { MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE } from '../../constants';

function HandleMovement({ children, walkIndex, tiles, oldPos, totalGold, savedItem, totalTime, gameLevel, gameItems, inGame, setMovementProps, stopTimerProps, openGoldChestProps, openItemChestProps, toggleInGameOff, resetLevelProps, saveLevelProps, resetLocationProps, nextLevelProps, displayPopupEndDisplay, setNotificationSuccess }) {
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
        return walkIndex >= 7 ? 0 : walkIndex + 1;
    }

    function observeBoundaries(newPos) {
        return newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE && newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE;
    }

    function observeImpassable(newPos) {
        const y = newPos[1] / SPRITE_SIZE;
        const x = newPos[0] / SPRITE_SIZE;
        const nextTile = tiles[y][x];
        return nextTile;
    }

    function dispatchMove(direction, newPos) {
        const walkIndex = getWalkIndex();
        const spriteLocation = getSpriteLocation(direction, walkIndex);

        setMovementProps(newPos, direction, walkIndex, spriteLocation);
    }

    function attemptMove(direction) {
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
                if (!inGame) return;
                stopTimerProps();
                // handlePopupEndDisplay();

                // saveLevelProps();

                // TODO these functions need reworking

                displayPopupEndDisplay();
                toggleInGameOff();
                // resetLevelProps();
                resetLocationProps();

                setNotificationSuccess(`You have reach the maze end!`);
                break;
            case 2:
                if (totalGold > 0) return;

                const gold = Math.floor(Math.random() * 10 + 1);
                openGoldChestProps(gold);

                setNotificationSuccess(`You have picked up ${gold} gold!`);
                break;
            case 3:
                if (savedItem.length > 0) return;

                const item = gameItems[Math.ceil(Math.random() * 7)];
                openItemChestProps(item);

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

function mapStateToProps(state) {
    return {
        walkIndex: state.player.walkIndex,
        tiles: state.map.tiles,
        oldPos: state.player.position,
        totalGold: state.game.gold,
        savedItem: state.game.item,
        totalTime: state.timer.time,
        gameLevel: state.game.level,
        gameItems: state.game.gameItems,
        inGame: state.game.inGame,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setMovementProps: (newPos, direction, walkIndex, spriteLocation) => dispatch(setMovement(newPos, direction, walkIndex, spriteLocation)),
        setTilesProps: (data) => dispatch(setTiles(data)),
        stopTimerProps: () => dispatch(toggleTimer().stop()),
        openGoldChestProps: (data) => dispatch(openGoldChest(data)),
        openItemChestProps: (data) => dispatch(openItemChest(data)),
        toggleInGameOff: () => dispatch(toggleInGame().off()),
        resetLevelProps: () => dispatch(resetLevel()),
        saveLevelProps: () => dispatch(saveLevel()),
        resetLocationProps: () => dispatch(resetLocation()),
        nextLevelProps: (data) => dispatch(nextLevel(data)),
        displayPopupEndDisplay: () => dispatch(handlePopupEnd().display()),
        testProps: () => dispatch(handlePopupEnd().display()),
        setNotificationSuccess: (data) => dispatch(setNotification(data).success()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HandleMovement);
