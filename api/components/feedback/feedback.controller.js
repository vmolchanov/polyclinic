const {feedbackService} = require('@c/feedback/feedback.service');
const {BaseController} = require('@/utils/router');

class FeedbackController extends BaseController {
    constructor() {
        super();

        this.getFeedback = this.getFeedback.bind(this);
        this.getAllFeedbacks = this.getAllFeedbacks.bind(this);
        this.addFeedback = this.addFeedback.bind(this);
        this.editFeedback = this.editFeedback.bind(this);
        this.removeFeedback = this.removeFeedback.bind(this);
    }

    async getFeedback(req, res, next) {
        this.exec(req, next, async () => {
            const feedback = await feedbackService.getFeedback(req.params.id);
            res.json(feedback);
        });
    }

    async getAllFeedbacks(req, res, next) {
        this.exec(req, next, async () => {
            const feedbacks = await feedbackService.getAllFeedbacks();
            res.json(feedbacks);
        });
    }

    async addFeedback(req, res, next) {
        this.exec(req, next, async () => {
            const feedback = await feedbackService.addFeedback({
                userid: req.body.user.id,
                text: req.body.text
            });
            res.json({status: 'success', data: feedback});
        });
    }

    async editFeedback(req, res, next) {
        this.exec(req, next, async () => {
            const feedback = await feedbackService.editFeedback(
                req.body.id,
                {
                    userid: req.body?.user?.id,
                    text: req.body.text,
                    date: req.body.date
                }
            );
            res.json({status: 'success', data: feedback});
        });
    }

    async removeFeedback(req, res, next) {
        this.exec(req, next, async () => {
            const feedback = await feedbackService.removeFeedback(req.body.id);
            res.json({status: 'success', data: feedback});
        });
    }
}

module.exports.feedbackController = new FeedbackController();
