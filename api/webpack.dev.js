/**
 * Конфиг написан только для корректной работы WebStorm с кастомными алиасами
 */

const path = require('path');

const moduleAliases = require('./package.json')._moduleAliases;
const alias = {};

for (const key in moduleAliases) {
    alias[key] = path.resolve(__dirname, moduleAliases[key]);
}

module.exports = {
    resolve: {alias},
};
