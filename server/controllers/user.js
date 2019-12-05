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
                res.send({ message: { errors: err.errors } });
                res.send('Passwords doesn\'t match');
                res.json({ message: 'Passwords doesn\'t match' });
                console.log(req.body);

            }

            User.create({ username, email, password, subscribe })
                .then((createdUser) => {
                    console.log('register---------------', createdUser);
                    GameProfile.create({ user: createdUser._id })
                        .then(() =>
                            res.send(createdUser)
                        ).catch((err) => {
                            res.send(err)
                        });
                })
                .catch((err) => {
                    res.send(err)
                });

            // try {
            //     await User.create({ username, password });
            //     res.redirect('/login');
            // } catch (err) {
            //     if (err.name === 'ValidationError') {
            //         res.render('user/register', { errors: err.errors });
            //     }
            // }
        },
        login: async (req, res, next) => {
            const { username, password } = req.body;
            User.findOne({ username })
                .then(user => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid Username or Password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.cookie, token).send(user);
                    // res.json({ token, user });
                })
                .catch(next);
            // const { username, password } = req.body;
            // try {
            //     const user = await User.findOne({ username });
            //     if (user) {
            //         const passwordMach = await user.matchPassword(password);
            //         if (!passwordMach) {
            //             res.render('user/login', {
            //                 errors: {
            //                     userValid: {
            //                         message: 'Wrong password or username! Try again.'
            //                     }
            //                 }
            //             });
            //             return;
            //         }
            //     }
            //     req.logIn(user, (err, user) => {
            //         if (err) {
            //             console.log(err);
            //         } else {
            //             res.redirect('/');
            //         }
            //     });
            //     // const token = utils.jwt.createToken({ id: user._id });
            //     // res.cookie(appConfig.authCookieName, token);
            //     // res.redirect('/');
            // } catch (err) { console.log(err); }
        },
        logout: (req, res) => {
            console.log(res.body)
            // res.clearCookie(appConfig.authCookieName);
            res.clearCookie();
            res.redirect('/')
        }
    }
};