const {validationResult} = require('express-validator');
const {ApiError} = require('../../errors/api');
const {userService} = require('./user.service');

class UserController {
    async login(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.UnprocessableEntity('Validation error', errors.array()));
        }
        try {
            await userService.login(req.body.email, req.body.password);
            res.redirect(307, '/token/add');
        } catch(err) {
            next(err);
        }
    }

    logout(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('User not logged in', errors.array()));
            }
            res.redirect(307, '/token/remove');
        } catch(err) {
            next(err);
        }
    }

    async signup(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.UnprocessableEntity('Validation error', errors.array()));
            }
            await userService.signup(req.body);
            res.redirect(307, '/token/add');
        } catch(err) {
            next(err);
        }
    }
}

module.exports.userController = new UserController();
