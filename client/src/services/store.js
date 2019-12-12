import { createStore, combineReducers } from 'redux';
import playerReducer from '../containers/game/components/player/reducer';
import mapReducer from '../containers/game/components/map/reducer';
import gameReducer from '../containers/game/reducer';
import userReducer from '../containers/login/reducer';

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    game: gameReducer,
    user: userReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;
