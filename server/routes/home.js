const router = require('express').Router();

router.get('/home', function (req, res, next) { res.json({ title: 'Express-Test/home GET' }); });
router.post('/home', function (req, res, next) { res.json({ title: 'Express-Test/home POST' }); });

module.exports = router;
