const router = require('express').Router();
const controller = require('../controllers');

const { auth } = require('../utils');

// router.get('/view-meme', controller.);
router.get('/', controller.social.get.all);
router.post('/', auth(), controller.social.post.memes);
router.post('/add-meme', controller.social.post.add);

module.exports = router;