const user = require('./users');
const game = require('./game');
const social = require('./social');

module.exports = (app) => {
    app.use('/api/user', user);
    app.use('/api/game', game);
    app.use('/api/social', social);
};