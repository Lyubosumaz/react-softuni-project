import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: '/' });

const handleRoute = (name) => (e) => {
    e.preventDefault();
    history.push(name);
};

export { history, handleRoute };
