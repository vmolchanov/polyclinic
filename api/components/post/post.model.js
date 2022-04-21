const {mongoose} = require('../../utils/mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = {
    Post: mongoose.model('Post', schema),
    roleSchema: schema
};
