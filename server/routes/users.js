const router = require('express').Router();
// const { auth } = require('../utils');

router.get('/register', function (req, res, next) { res.send('Respond with a Get Register'); });
router.get('/login', function (req, res, next) { res.send('respond with a Get Login'); });
router.get('/logout', function (req, res, next) { res.send('respond with a Get Logout'); });

router.post('/register', function (req, res, next) { res.send('respond with a Post Register'); });
router.post('/login', function (req, res, next) { res.send('respond with a Post Login'); });

module.exports = router;