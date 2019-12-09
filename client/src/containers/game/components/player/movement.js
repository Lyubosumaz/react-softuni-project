import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../constants';
import store from '../../../../services/store';
import http from '../../../../services/http';
import { tiles } from '../data/maps/2';

export default function HandleMovement({ children }) {

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
        };
    };

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
        };
    };

    function getWalkIndex() {
        const walkIndex = store.getState().player.walkIndex;
        return walkIndex >= 7 ? 0 : walkIndex + 1;
    };


    function observeBoundaries(newPos) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
            (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE);
    };

    function observeImpassable(newPos) {
        const tiles = store.getState().map.tiles;
        const y = newPos[1] / SPRITE_SIZE;
        const x = newPos[0] / SPRITE_SIZE;
        const nextTile = tiles[y][x];
        return nextTile;
    };

    function dispatchMove(direction, newPos) {
        const walkIndex = getWalkIndex();

        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos,
                direction,
                walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex),
            }
        });
    };



    function attemptMove(direction) {
        const oldPos = store.getState().player.position;
        const newPos = getNewPosition(oldPos, direction);

        if (observeBoundaries(newPos) && observeImpassable(newPos) < 4) {
            handleCurrentTile(observeImpassable(newPos));
            dispatchMove(direction, newPos);
        }
    };

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
        };
    };

    function handleCurrentTile(tile) {
        switch (tile) {
            case 1:
                store.dispatch({
                    type: 'FINAL',
                    payload: false,
                });
                console.log(store.getState().game.time)
                return http.Game.save({
                    _id: store.getState().user.userId,
                    totalGold: store.getState().game.gold,
                    totalItem: store.getState().game.item,
                    totalTime: store.getState().game.time,
                }).then((res) => {
                    console.log('--SAVE--', res);
                    // store.dispatch({
                    //     type: 'ADD_TILES',
                    //     payload: {
                    //         tiles,
                    //     }
                    // });
                })
            case 2:
                if (store.getState().game.gold > 0) { return; }
                store.dispatch({
                    type: 'OPEN_GOLD_CHEST',
                    payload: Math.floor((Math.random() * 10) + 1),
                });
                break;
            case 3:
                if (store.getState().game.item.length > 0) { return; }
                store.dispatch({
                    type: 'OPEN_ITEM_CHEST',
                    payload: '5dee5913f4808b210cfd456a',
                });
                break
            default:
                break;
        };
    };

    return (
        <React.Fragment>
            <KeyboardEventHandler
                handleKeys={['left', 'right', 'up', 'down']}
                onKeyEvent={(key, e) => handleKeyDown(e)} />
            {children}
        </React.Fragment>
    );
};
