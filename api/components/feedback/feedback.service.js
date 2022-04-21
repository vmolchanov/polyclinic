const {DBService} = require('@/utils/dbservice');
const {Feedback} = require('./feedback.model');

class FeedbackService {
    async getFeedback(id) {
        return DBService.getEntityById(id, Feedback);
    }

    async addFeedback(userId, text) {
        const data = {userId, text};
        return DBService.addEntity(data, Feedback);
    }

    async editFeedback(id, {userId, text, date}) {
        const data = {};
        if (userId !== undefined) {
            data.user = userId;
        }
        if (text !== undefined) {
            data.text = text;
        }
        if (date !== undefined) {
            data.date = date;
        }
        return DBService.editEntity(id, data, Feedback);
    }

    async removeFeedback(id) {
        return DBService.removeEntity(id, Feedback);
    }
}

module.exports.feedbackService = new FeedbackService();
