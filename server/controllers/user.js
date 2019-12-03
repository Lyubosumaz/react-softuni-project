const User = require('../models/User');
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
            const { username, password } = req.body;
            User.create({ username, password })
                .then((createdUser) => { res.send(createdUser) })
                .catch(next);

            // const { username, password, repeatPassword } = req.body;
            // if (password !== repeatPassword) {
            //     res.render('user/register', {
            //         errors: {
            //             repeatPassword: { message: 'Password and Re-Password doesn\'t match!' }
            //         }
            //     });
            // }

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
                        res.status(401).send('Invalid username or password');
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
            // res.clearCookie(appConfig.authCookieName);
            res.clearCookie();
            res.redirect('/')
        }
    }
};