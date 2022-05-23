const {userService} = require('@c/user/user.service');
const {DBService} = require('@/utils/dbservice');
const {Feedback} = require('./feedback.model');

class FeedbackService {
    async getFeedback(id) {
        const feedback = await DBService.getEntityById(id, Feedback);
        feedback.user = userService.getUser(feedback.user);
        feedback.author = userService.getUser(feedback.author);
        return feedback;
    }

    async getAllFeedbacks() {
        const feedbacks = DBService.getEntities(Feedback);
        for (let i = 0; i < feedbacks.length; i++) {
            feedbacks[i].user = userService.getUser(feedbacks[i].user);
            feedbacks[i].author = userService.getUser(feedbacks[i].author);
        }
        return feedbacks;
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
