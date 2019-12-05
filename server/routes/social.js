const router = require('express').Router();
const controller = require('../controllers');

const { auth } = require('../utils');

// router.get('/view-meme', controller.);
router.post('/add-meme',  controller.social.post.add);

module.exports = router;