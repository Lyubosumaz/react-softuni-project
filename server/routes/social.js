const router = require('express').Router();
const controller = require('../controllers');
const { auth } = require('../utils');

router.post('/', auth(), controller.social.post.scroll);
router.post('/add-meme', auth(), controller.social.post.add);
router.get('/view-meme/:id', auth(), controller.social.get.view);
router.put('/edit-meme/:id', auth(), controller.social.put.edit);
router.delete('/delete-meme/:id', auth(), controller.social.delete.delete);

module.exports = router;
