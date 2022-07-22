const router = require('express').Router();
const TournoisController = require('../controllers/tournois');

router.get('/', TournoisController.index);
router.get('/:tournoiId', TournoisController.show);

module.exports = router;
