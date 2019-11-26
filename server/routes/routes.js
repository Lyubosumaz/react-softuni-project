const home = require('./home');
const user = require('./users');

module.exports = (app) => {

    app.get(home);
    app.get('*', (req, res) => { res.status(404); res.send('404 Not Found'); res.end(); });
};