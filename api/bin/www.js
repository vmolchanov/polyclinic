require('module-alias/register');


const {port} = require('../config').base;
const app = require('../app');
const {mongoose} = require('../utils/mongoose');

const start = async () => {
    await mongoose.connect();
    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
    });
};

start();
