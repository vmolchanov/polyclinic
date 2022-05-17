const {mongoose} = require('../../utils/mongoose');

const schema = new mongoose.Schema({
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
