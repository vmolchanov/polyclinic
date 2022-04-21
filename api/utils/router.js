const express = require('express');
const {validationResult} = require('express-validator');
const {ApiError} = require('../errors/api');

module.exports.createRouter = () => {
    return new express.Router();
};

module.exports.BaseController = class BaseController {
    checkErrors(req) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw ApiError.UnprocessableEntity('Validation error', errors.array());
        }
    }

    exec(req, next, cb) {
        try {
            this.checkErrors(req);
            cb();
        } catch(err) {
            next(err);
        }
    }
}
