const router = require('express').Router();
const ArticlesController = require('../controllers/articles');

router.get('/', ArticlesController.index);
router.get('/:articleId', ArticlesController.show);
router.post('/create', ArticlesController.create);
router.put('/:articleId/update', ArticlesController.update);

module.exports = router;
