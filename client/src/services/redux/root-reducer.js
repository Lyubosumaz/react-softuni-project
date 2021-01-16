import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Project Reducers
import gameReducer from './ducks/ForestRunner/game';
import levelReducer from './ducks/ForestRunner/level';
import mapReducer from './ducks/ForestRunner/map';
import playerReducer from './ducks/ForestRunner/player';
import menuReducer from './ducks/menu';
import notificationReducer from './ducks/notification';
import popupReducer from './ducks/popup';
import timerReducer from './ducks/timer';
import userReducer from './ducks/user';

const appReducer = combineReducers({
    game: gameReducer,
    level: levelReducer,
    map: mapReducer,
    player: playerReducer,
    menu: menuReducer,
    notification: notificationReducer,
    popup: popupReducer,
    timer: timerReducer,
    user: userReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['player', 'map', 'menu', 'game', 'timer', 'user', 'level'],
};

const rootReducer = (state, action) => {
    // if (action.type === 'USER_LOGOUT') {
    //     storage.removeItem('persist:root');
    //     state = undefined;
    // }

    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
