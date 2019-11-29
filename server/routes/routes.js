const home = require('./home');
const user = require('./users');
const router = require('express').Router();

module.exports = (app) => {

    app.use('/api', home);
    app.use('/api/user', user);
    // app.get('*', (req, res) => { res.status(404); res.send('404 Not Found'); res.end(); });
};