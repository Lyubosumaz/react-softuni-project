const User = require('../models/User');
const GameProfile = require('../models/GameProfile');
const BlacklistToken = require('../models/BlacklistToken');

const model = require('../models');

const config = require('../config/constants');
const appConfig = require('../app-config');
const utils = require('../utils');

module.exports = {
    get: {
        house: (req, res) => {
            model.GameProfile.find()
                .populate('user')
                .then((users) => { res.send(users) })
                .catch((err) => { res.send(err); });
        },
        profile: (req, res) => {
            const userId = req.user._id;

            model.GameProfile.findOne({ user: userId })
                .then((profile) => { res.send(profile); })
                .catch((err) => { res.send(err); });
        },
    },
    post: {
        register: async (req, res, next) => {
            const { username, email, password, subscribe, repeatPassword } = req.body;
            if (password !== repeatPassword) {
                res.status(401).send('Passwords don\'t match!');
                return;
            }

            User.create({ username, email, password, subscribe })
                .then((createdUser) => {
                    GameProfile.create({ user: createdUser._id })
                        .then(() => {
                            res.send(createdUser);
                        }
                        ).catch((err) => { res.send(err); });
                })
                .catch((err) => { res.send(err); });
        },
        login: async (req, res) => {
            const { username, password } = req.body;
            User.findOne({ username })
                .then(user => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Wrong password or username! Try again.');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.cookie, token).send(user);
                })
                .catch((err) => {
                    res.send(err);
                });
        },
        logout: (req, res) => {
            const token = req.cookies[appConfig.cookieName];
            BlacklistToken.create({ token })
                .then(() => {
                    res.clearCookie(appConfig.cookieName)
                        .send({ message: 'logout successful' });

                })
        },
        refresh: (req, res) => {
            const token = req.cookies[appConfig.cookieName];
            BlacklistToken.create({ token })
                .then(() => {
                    const newToken = utils.jwt.createToken({ id: req.user._id });
                    res.clearCookie(appConfig.cookieName)
                        .cookie(config.cookie, newToken)
                        .send({ message: 'new token' })
                })
        },
    }
};