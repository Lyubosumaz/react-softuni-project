const home = require('./home');
const user = require('./users');
const game = require('./game');
const social = require('./social');

// const auth

module.exports = (app) => {
    app.use('/api', home);
    app.use('/api/user', user);
    app.use('/api/game', game);
    app.use('/api/social', social);
};