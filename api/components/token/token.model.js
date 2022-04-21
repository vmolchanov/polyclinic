const {mongoose} = require('../../utils/mongoose');

const schema = new mongoose.Schema({
    user: {
        required: true,
        type: mongoose.ObjectId
    },
    tokens: {
        default: [],
        type: [String]
    }
});

module.exports = {
    Token: mongoose.model('Token', schema),
    tokenSchema: schema
};
