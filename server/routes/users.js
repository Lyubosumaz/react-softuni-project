const router = require('express').Router();
const controller = require('../controllers');
// const { auth } = require('../utils');

router.post('/register', controller.user.post.register);
router.post('/login', controller.user.post.login);
// router.get('/login', function (req, res, next) { res.send('respond with a Get Login'); });
// router.get('/logout', function (req, res, next) { res.send('respond with a Get Logout'); });

// router.post('/register', function (req, res, next) { res.send('respond with a Post Register'); });
// router.post('/login', function (req, res, next) { res.send('respond with a Post Login'); });

module.exports = router;