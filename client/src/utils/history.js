import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({ basename: '/' });

export const handleRoute = (direction) => {
    history.push(direction);
};
