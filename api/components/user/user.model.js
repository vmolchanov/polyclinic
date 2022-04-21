const {Role} = require('../role/role.model');
const {Organization} = require('../organization/organization.model');
const {Post} = require('../post/post.model');
const {Feedback} = require('../feedback/feedback.model');
const {Reception} = require('../reception/reception.model');
const {mongoose} = require('../../utils/mongoose');

const schema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    photo: {
        type: String,
    },
    cabinet: {
        type: Number
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.ObjectId,
        ref: Role
    },
    organization: {
        type: mongoose.ObjectId,
        ref: Organization
    },
    post: {
        type: mongoose.ObjectId,
        ref: Post
    },
    receptions: {
        type: [mongoose.ObjectId],
        ref: Reception
    },
    feedbacks: {
        type: [mongoose.ObjectId],
        ref: Feedback
    },
});

module.exports = {
    User: mongoose.model('User', schema),
    userSchema: schema
};
