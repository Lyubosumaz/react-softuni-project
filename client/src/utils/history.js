import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: '/' });

const handleRoute = (direction) => {
    history.push(direction);
};

export { history, handleRoute };
