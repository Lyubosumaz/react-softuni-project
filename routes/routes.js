const home = require('./home');
const user = require('./users');
const game = require('./game');
const social = require('./social');

// const auth

module.exports = (app) => {
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })
    app.use('/api', home);
    app.use('/api/user', user);
    app.use('/api/game', game);
    app.use('/api/social', social);
};