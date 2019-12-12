const models = require('../models');
const config = require('../config/constants');
const utils = require('../utils');

module.exports = {
    get: {
        house: (req, res) => {
            models.GameProfile.find()
                .populate('user')
                .then((users) => { res.send(users) })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try later.' });
                    console.error(err);
                });
        },
        profile: (req, res) => {
            const userId = req.user._id;

            models.GameProfile.findOne({ user: userId })
                .then((profile) => { res.send(profile); })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try later.' });
                    console.error(err);
                });
        },
    },
    post: {
        register: async (req, res, next) => {
            const { username, email, password, subscribe, repeatPassword } = req.body;

            if (password !== repeatPassword) {
                res.status(401).send({ message: 'Passwords don\'t match! Try again.' });
                return;
            }

            models.User.create({ username, email, password, subscribe })
                .then((createdUser) => {
                    models.GameProfile.create({ user: createdUser._id })
                        .then(() => {
                            res.send({ message: 'You Registered successfully!' });
                        })
                        .catch((err) => {
                            res.send({ message: 'There is a problem, please try to Register later.' });
                            console.error(err);
                        });
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try to Register later.' });
                    console.error(err);
                });
        },
        login: async (req, res) => {
            const { username, password } = req.body;

            models.User.findOne({ username })
                .then(user => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
                .then(([user, match]) => {

                    if (!match) {
                        res.status(401).send({ message: 'Wrong password or username! Try again.' });
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.cookie, token).send(user);
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try to Login later.' });
                    console.error(err);
                });
        },
        logout: (req, res) => {
            const token = req.cookies[config.cookie];

            models.BlacklistToken.create({ token })
                .then(() => {
                    res.clearCookie(config.cookie)
                        .send({ message: 'You Logout successfully!' });
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try to Logout later.' });
                    console.error(err);
                });
        },
        refresh: (req, res) => {
            const userId = req.user._id;
            const token = req.cookies[config.cookie];

            models.BlacklistToken.create({ token })
                .then(() => {
                    const newToken = utils.jwt.createToken({ id: userId });

                    res.clearCookie(config.cookie)
                        .cookie(config.cookie, newToken)
                        .send({ message: 'You received new authorization token' });
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, with your authorization.' });
                    console.error(err);
                });
        },
    },
};