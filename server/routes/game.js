const router = require('express').Router();
const controller = require('../controllers');
const { auth } = require('../utils');

router.post('/save', auth(), controller.game.post.save);
router.get('/shop', controller.game.get.shop);

module.exports = router;