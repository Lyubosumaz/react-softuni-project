import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Project Reducers
import playerReducer from '../components/Games/ForestRunner/components/player/reducer';
import gameReducer from '../components/Games/ForestRunner/reducer';
import mapReducer from './redux/ducks/ForestRunner/map';
import notificationReducer from './redux/ducks/notification';
import userReducer from './redux/ducks/user';

const appReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    game: gameReducer,
    user: userReducer,
    notification: notificationReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['player', 'map', 'game', 'user'],
};

const rootReducer = (state, action) => {
    // if (action.type === 'USER_LOGOUT') {
    //     storage.removeItem('persist:root');
    //     state = undefined;
    // }

    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
