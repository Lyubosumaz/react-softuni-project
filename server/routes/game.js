const router = require('express').Router();
const controller = require('../controllers');
const { auth } = require('../utils');

router.post('/save', auth(), controller.game.post.save);
router.get('/shop', auth(), controller.game.get.shop);
router.get('/buy/:id', auth(), controller.game.get.buy);

module.exports = router;