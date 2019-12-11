const router = require('express').Router();
const controller = require('../controllers');
const { auth } = require('../utils');

router.post('/save', auth(), controller.game.post.save);
router.get('/shop', auth(), controller.game.get.shop);
router.get('/buy/:id', auth(), controller.game.get.buy);
router.get('/inventory', auth(), controller.game.get.inventory);
router.get('/sell/:id', auth(), controller.game.get.sell);
router.get('/equip/:id', auth(), controller.game.get.equip);

module.exports = router;