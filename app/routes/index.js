const router = require('express').Router();

//IMPORT SUB ROUTES
const users = require('./user');
const articles = require('./articles');
const jeux = require('./jeu');
const tournois = require('./tournois');

router.use('/users', users);
router.use('/articles', articles);
router.use('/jeux', jeux);
router.use('/tournois', tournois);

module.exports = router;
