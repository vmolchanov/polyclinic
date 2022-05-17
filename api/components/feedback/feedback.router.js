const {feedbackController} = require('./feedback.controller');
const {FeedbackValidator} = require('./feedback.validator');
const router = require('../../utils/router').createRouter();

router.get('/', feedbackController.getAllFeedbacks);

router.get('/:id', FeedbackValidator.getFeedback, feedbackController.getFeedback);

router.post('/', FeedbackValidator.addFeedback, feedbackController.addFeedback);

router.put('/', FeedbackValidator.editFeedback, feedbackController.editFeedback);

router.delete('/', FeedbackValidator.removeFeedback, feedbackController.removeFeedback);

module.exports.feedbackRouter = router;
