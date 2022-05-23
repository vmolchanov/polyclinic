const {authMiddleware} = require('@/middlewares/auth');
const {feedbackController} = require('./feedback.controller');
const {FeedbackValidator} = require('./feedback.validator');
const router = require('../../utils/router').createRouter();

router.get('/', authMiddleware, feedbackController.getAllFeedbacks);

router.get('/:id', authMiddleware, FeedbackValidator.getFeedback, feedbackController.getFeedback);

router.post('/', authMiddleware, FeedbackValidator.addFeedback, feedbackController.addFeedback);

router.put('/', authMiddleware, FeedbackValidator.editFeedback, feedbackController.editFeedback);

router.delete('/', authMiddleware, FeedbackValidator.removeFeedback, feedbackController.removeFeedback);

module.exports.feedbackRouter = router;
