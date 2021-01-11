import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// TODO make barrel reducer for different games
import playerReducer from '../components/Games/ForestRunner/components/player/reducer';
import mapReducer from '../components/Games/ForestRunner/components/map/reducer';
import gameReducer from '../components/Games/ForestRunner/reducer';

import userReducer from './redux/ducks/user';
import notificationReducer from '../components/Notification/reducer';

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
