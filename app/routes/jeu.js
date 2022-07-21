const router = require('express').Router();
const UserController = require('../controllers/jeu');

router.get('/', UserController.index);

module.exports = router;
