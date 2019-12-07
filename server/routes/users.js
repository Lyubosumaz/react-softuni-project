const router = require('express').Router();
const controller = require('../controllers');
// const { auth } = require('../utils');

router.post('/register', controller.user.post.register);
router.post('/login', controller.user.post.login);
router.post('/logout', controller.user.post.logout);


module.exports = router;