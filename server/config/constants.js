const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: normalizePort(process.env.PORT || '4000'),
        dbURL: 'mongodb://localhost:27017/alpha-test',
        cookie: 'auth-token'
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