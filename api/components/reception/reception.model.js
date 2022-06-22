const {mongoose} = require('../../utils/mongoose');

const schema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.ObjectId,
        ref: 'User',
        required: true,
    },
    patient: {
        type: mongoose.ObjectId,
        ref: 'User',
        required: true,
    },
    review: {
        type: String,
    },
});

module.exports = {
    Reception: mongoose.model('Reception', schema),
    userSchema: schema
};
