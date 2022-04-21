const {mongoose} = require('../../utils/mongoose');
const {User} = require('../user/user.model');

const schema = new mongoose.Schema({
    day: {
        type: Number,
        required: true
    },
    timeFrom: {
        type: Number,
        required: true
    },
    timeTo: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.ObjectId,
        ref: User
    },
});

module.exports = {
    Reception: mongoose.model('Reception', schema),
    userSchema: schema
};
