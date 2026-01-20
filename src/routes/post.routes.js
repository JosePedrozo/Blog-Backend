const router = require('express').Router();
const controller = require('../controllers/post.controller');

router.get('/', controller.getPosts);
router.get('/search', controller.searchPosts);
router.get('/:id', controller.getPostById);
router.post('/', controller.createPost);
router.put('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);

module.exports = router;
