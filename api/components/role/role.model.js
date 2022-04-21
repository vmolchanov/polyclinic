const {mongoose} = require('../../utils/mongoose');

const schema = new mongoose.Schema({
    value: {
        default: 'patient',
        type: String,
        unique: true,
        required: true,
    }
});

module.exports = {
    Role: mongoose.model('Role', schema),
    roleSchema: schema
};
