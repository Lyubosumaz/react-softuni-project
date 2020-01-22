const { port, dbName, cookieName } = require('../app-config');

const env = process.env.NODE_ENV || 'development';
process.env.TZ = 'Europe/Sofia';

const config = {
    development: {
        port: normalizePort(process.env.PORT || `${port}`),
        dbURL: `mongodb://localhost:27017/${dbName}`,
        cookie: `${cookieName}`
    },
    production: {}
};

function normalizePort(value) {
    const port = parseInt(value, 10);
    if (isNaN(port)) { return value; }
    if (port >= 0) { return port; }
    return false;
}

module.exports = config[env];
