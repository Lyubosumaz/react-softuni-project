import history from './history';

const handleRoute = (name) => (event) => {
    event.preventDefault();
    history.push(name);
};

export default handleRoute;
