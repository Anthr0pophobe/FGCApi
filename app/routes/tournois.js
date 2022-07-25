const router = require('express').Router();
const TournoisController = require('../controllers/tournois');

router.get('/', TournoisController.index);
router.get('/:tournoiId', TournoisController.show);
router.post('/create', TournoisController.create);
router.put('/:tournoiId/update', TournoisController.update);

module.exports = router;
