const router = require('express').Router();
const controller = require('../controllers');
// const { auth } = require('../utils');

router.post('/register', controller.user.post.register);
router.post('/login', controller.user.post.login);
router.get('/logout', function (req, res, next) { res.send('respond with a Get Logout'); });

module.exports = router;