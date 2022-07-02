const router = require('express').Router();
const UserController = require('../controllers/user');

router.get('/', UserController.index);
router.get('/:userId', UserController.show);
// router.get('/create', UserController.create);
// router.get('/:userId/update', UserController.update);

module.exports = router;
