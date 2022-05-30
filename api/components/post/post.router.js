const {authMiddleware} = require('@/middlewares/auth');
const router = require('../../utils/router').createRouter();
const {postController} = require('./post.controller');
const {PostValidator} = require('./post.validator');

router.get('/', authMiddleware, postController.getAllPosts);

router.get('/:id', authMiddleware, PostValidator.getPost, postController.getPost);

router.post('/', authMiddleware, PostValidator.addPost, postController.addPost);

router.put('/', authMiddleware, PostValidator.editPost, postController.editPost);

router.delete('/', authMiddleware, PostValidator.removePost, postController.removePost);

module.exports.postRouter = router;
