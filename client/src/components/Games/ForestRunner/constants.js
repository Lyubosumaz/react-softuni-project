import { tiles as levelOne } from './core/Map/levels/1';

function readLevelOne() {
    return {
        getRows: () => levelOne.length,
        getColumns: () => levelOne[0].length,
    };
}

//dimensions player 64x64 => wrapped in 64x64 => filed 1600x640
// export const SPRITE_SIZE = 64;
export const SPRITE_SIZE = 48;
// export const MAP_HEIGHT = SPRITE_SIZE * 10;
// export const MAP_WIDTH = SPRITE_SIZE * 25;
export const MAP_HEIGHT = SPRITE_SIZE * readLevelOne().getRows();
export const MAP_WIDTH = SPRITE_SIZE * readLevelOne().getColumns();
