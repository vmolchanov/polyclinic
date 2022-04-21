const mongoose = require('mongoose');
const {uri, useNewUrlParser, useUnifiedTopology} = require('../config').db;

class Mongoose {
    connect() {
        return mongoose.connect(uri, {useNewUrlParser, useUnifiedTopology});
    }

    model(name, schema) {
        return mongoose.model(name, schema);
    }

    get Schema() {
        return mongoose.Schema;
    }

    get ObjectId() {
        return mongoose.ObjectId;
    }
}

module.exports.mongoose = new Mongoose();
