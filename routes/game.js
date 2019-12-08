const router = require('express').Router();
const controller = require('../controllers');

router.post('/save', controller.game.post.save);

module.exports = router;