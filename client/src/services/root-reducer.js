import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import playerReducer from '../containers/game/components/player/reducer';
import mapReducer from '../containers/game/components/map/reducer';
import gameReducer from '../containers/game/reducer';
import userReducer from '../components/Login/reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['player', 'map', 'game', 'user'],
};

const appReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    game: gameReducer,
    user: userReducer,
});

const rootReducer = (state, action) => {
    // if (action.type === 'USER_LOGOUT') {
    //     storage.removeItem('persist:root');
    //     state = undefined;
    // }

    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
