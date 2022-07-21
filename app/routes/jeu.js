const router = require('express').Router();
const UserController = require('../controllers/jeu');

router.get('/', UserController.index);
router.get('/:jeuId', UserController.show);

module.exports = router;
