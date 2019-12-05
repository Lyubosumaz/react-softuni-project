const User = require('../models/User');
const GameProfile = require('../models/GameProfile');
const config = require('../config/constants');

const appConfig = require('../app-config');
const utils = require('../utils');

module.exports = {
    get: {
        all: (req, res, next) => {
            User.find()
                .then((users) => res.send(users))
                .catch(next);
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
                        .then(() =>
                            res.send(createdUser)
                        ).catch((err) => { res.send(err); });
                })
                .catch((err) => { res.send(err); });
        },
        login: async (req, res, next) => {
            const { username, password } = req.body;
            User.findOne({ username })
                .then(user => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Wrong password or username! Try again.');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    // res.cookie(config.cookie, token).send(user);
                    res.json({ user, token });
                })
                .catch((err) => {
                    res.send(err);
                });
        },
        logout: (req, res) => {
            console.log(res.body)
            // res.clearCookie(appConfig.authCookieName);
            res.clearCookie();
        },
    }
};