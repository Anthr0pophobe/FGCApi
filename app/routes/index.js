const router = require('express').Router();

//IMPORT SUB ROUTES
const users = require('./user');
const articles = require('./articles');

router.use('/users', users);
router.use('/articles', articles);

module.exports = router;
