const router = require('express').Router();
// const { auth } = require('../utils');

router.get('/', function (req, res, next) { res.json({ title: 'Express-Test/' }); });
router.get('/home', function (req, res, next) { res.json({ title: 'Express-Test/home' }); });

module.exports = router;
