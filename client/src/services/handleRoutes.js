import history from './history';

const handleRoute = (name) => (e) => {
    e.preventDefault();
    history.push(name);
};

export default handleRoute;