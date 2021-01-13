import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const enhancers = [applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];

const store = createStore(rootReducer, compose(...enhancers));

const persistor = persistStore(store);

export { store, persistor };
