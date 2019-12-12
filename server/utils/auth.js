const jwt = require('./jwt');
const config = require('../config/constants');
const models = require('../models');

function auth(redirectUnauthenticated = true) {
    return function (req, res, next) {
        const token = req.cookies[config.cookie] || '';

        Promise.all([
            jwt.verifyToken(token),
            models.BlacklistToken.findOne({ token })
        ])
            .then(([data, blacklistToken]) => {
                if (blacklistToken) {
                    return Promise.reject(new Error('blacklisted token'));
                }

                models.User.findById(data.id).then(user => {
                    req.user = user;
                    next();
                });
            })
            .catch((err) => {
                if (!redirectUnauthenticated) { next(); return; }

                if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                    return res.status(401).send({ message: 'UNAUTHORIZED!' });
                }

                next(err)
            });
    };
};

module.exports = auth;
