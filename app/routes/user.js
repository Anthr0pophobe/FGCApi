const router = require('express').Router();
const UserController = require('../controllers/user');

router.get('/', UserController.index);
router.get('/:userId', UserController.show);
router.post('/create', UserController.create);
router.put('/:userId/update', UserController.update);

module.exports = router;
