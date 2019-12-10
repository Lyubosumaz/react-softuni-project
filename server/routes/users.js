const router = require('express').Router();
const controller = require('../controllers');
const { auth } = require('../utils');

router.post('/register', controller.user.post.register);
router.post('/login', controller.user.post.login);
router.post('/logout', auth(), controller.user.post.logout);
router.post('/refresh', auth(), controller.user.post.refresh);
router.get('/profile', auth(), controller.user.get.profile);
router.get('/house-of-fame', controller.user.get.house);

module.exports = router;