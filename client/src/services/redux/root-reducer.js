import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Project Reducers
import gameReducer from './ducks/ForestRunner/game';
import mapReducer from './ducks/ForestRunner/map';
import playerReducer from './ducks/ForestRunner/player';
import menuReducer from './ducks/menu';
import notificationReducer from './ducks/notification';
import popupReducer from './ducks/popup';
import timerReducer from './ducks/timer';
import userReducer from './ducks/user';

const appReducer = combineReducers({
    popup: popupReducer,
    timer: timerReducer,
    menu: menuReducer,
    player: playerReducer,
    map: mapReducer,
    game: gameReducer,
    user: userReducer,
    notification: notificationReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['player', 'map', 'menu', 'game', 'timer', 'user'],
};

const rootReducer = (state, action) => {
    // if (action.type === 'USER_LOGOUT') {
    //     storage.removeItem('persist:root');
    //     state = undefined;
    // }

    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
