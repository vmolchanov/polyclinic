const router = require('../../utils/router').createRouter();
const {postController} = require('./post.controller');
const {PostValidator} = require('./post.validator');

router.get('/', postController.getAllPosts);

router.get('/:id', PostValidator.getPost, postController.getPost);

router.post('/', PostValidator.addPost, postController.addPost);

router.put('/', PostValidator.editPost, postController.editPost);

router.delete('/', PostValidator.removePost, postController.removePost);

module.exports.postRouter = router;
