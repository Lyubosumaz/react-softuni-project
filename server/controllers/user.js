const User = require('../models/User');

const appConfig = require('../app-config');
const utils = require('../utils');

module.exports = {
    get: {
        register: (req, res) => {
            res.render('user/register');
        },
        login: (req, res) => {
            res.render('user/login');
        },
    },
    post: {
        // try{}catch(err){console.log(err);}
        register: async (req, res) => {
            const { username, password, repeatPassword } = req.body;
            if (password !== repeatPassword) {
                res.render('user/register', {
                    errors: {
                        repeatPassword: { message: 'Password and Re-Password doesn\'t match!' }
                    }
                });
            }

            try {
                await User.create({ username, password });
                res.redirect('/login');
            } catch (err) {
                if (err.name === 'ValidationError') {
                    res.render('user/register', { errors: err.errors });
                }
            }
        },
        login: async (req, res) => {
            const { username, password } = req.body;
            try {
                const user = await User.findOne({ username });
                if (user) {
                    const passwordMach = await user.matchPassword(password);
                    if (!passwordMach) {
                        res.render('user/login', {
                            errors: {
                                userValid: {
                                    message: 'Wrong password or username! Try again.'
                                }
                            }
                        });
                        return;
                    }
                }
                req.logIn(user, (err, user) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.redirect('/');
                    }
                });
                // const token = utils.jwt.createToken({ id: user._id });
                // res.cookie(appConfig.authCookieName, token);
                // res.redirect('/');
            } catch (err) { console.log(err); }
        },
        logout: (req, res) => {
            // res.clearCookie(appConfig.authCookieName);
            res.clearCookie();
            res.redirect('/')
        }
    }
};