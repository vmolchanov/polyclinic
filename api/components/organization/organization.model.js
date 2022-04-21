const {mongoose} = require('../../utils/mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phone: {
        type: String
    }
});

module.exports = {
    Organization: mongoose.model('Organization', schema),
    roleSchema: schema
};
