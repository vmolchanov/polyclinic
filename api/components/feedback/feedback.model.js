const {mongoose} = require('../../utils/mongoose');
const {User} = require('@/components/user/user.model')

const schema = new mongoose.Schema({
    user: {
        ref: User
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = {
    Feedback: mongoose.model('Feedback', schema),
    roleSchema: schema
};
