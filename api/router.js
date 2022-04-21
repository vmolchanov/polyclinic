const router = require('./utils/router').createRouter();

const {postRouter} = require('./components/post/post.router');

router.use('/post', postRouter);

module.exports = router;
