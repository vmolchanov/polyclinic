const {body, param} = require('express-validator');

class FeedbackValidator {
    static get getFeedback() {
        return [
            param('id').isString().notEmpty()
        ];
    }

    static get addFeedback() {
        return [
            body('user').isObject().notEmpty(),
            body('text').isString().notEmpty,
        ];
    }

    static get editFeedback() {
        return [
            body('id').isString().notEmpty(),
            body('user').isObject(),
            body('text').isString()
        ];
    }

    static get removeFeedback() {
        return [
            body('id').isString().notEmpty()
        ];
    }
}

module.exports = {FeedbackValidator};
