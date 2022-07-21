const router = require('express').Router();

//IMPORT SUB ROUTES
const users = require('./user');
const articles = require('./articles');
const jeux = require('./jeu');

router.use('/users', users);
router.use('/articles', articles);
router.use('/jeux', jeux);

module.exports = router;
