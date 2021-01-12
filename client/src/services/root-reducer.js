import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Project Reducers
import gameReducer from '../components/Games/ForestRunner/reducer';
import mapReducer from './redux/ducks/ForestRunner/map';
import playerReducer from './redux/ducks/ForestRunner/player';
import menuReducer from './redux/ducks/menu';
import notificationReducer from './redux/ducks/notification';
import timerReducer from './redux/ducks/timer';
import userReducer from './redux/ducks/user';

const appReducer = combineReducers({
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
