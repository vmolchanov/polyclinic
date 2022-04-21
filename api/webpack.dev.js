const path = require('path');

const moduleAliases = require('./package.json')._moduleAliases;
const alias = {
    // '@': __dirname + '/'
};

for (const key in moduleAliases) {
    alias[key] = path.resolve(__dirname, moduleAliases[key]);
}

// alias['@'] = __dirname + '/';

module.exports = {
    resolve: {alias},
};
