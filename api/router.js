const router = require('./utils/router').createRouter();

const {feedbackRouter} = require('./components/feedback/feedback.router');
const {organizationRouter} = require('./components/organization/organization.router');
const {postRouter} = require('./components/post/post.router');
const {receptionRouter} = require('./components/reception/reception.router');
const {roleRouter} = require('./components/role/role.router');
const {tokenRouter} = require('./components/token/token.router');
const {userRouter} = require('./components/user/user.router');

router.use('/feedback', feedbackRouter);
router.use('/organization', organizationRouter);
router.use('/post', postRouter);
router.use('/reception', receptionRouter);
router.use('/role', roleRouter);
router.use('/token', tokenRouter);
router.use('/user', userRouter);

module.exports = router;
