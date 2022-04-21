const {body, cookie} = require('express-validator');

class UserValidator {
    static get login() {
        return [
            cookie('refreshToken').isEmpty(),
            body('email').isString().isEmail().notEmpty(),
            body('password').isString().notEmpty(),
        ];
    }

    static get singup() {
        return [
            cookie('refreshToken').isEmpty(),
            body('email').isString().isEmail().notEmpty(),
            body('phone').isString().notEmpty(),
            body('firstName').isString().required(),
            body('lastName').isString().required(),
            body('secondName').isString().optional(),
            body('password').isString().notEmpty(),
        ];
    }

    static get logout() {
        return [
            cookie('refreshToken').notEmpty().isJWT(),
        ];
    }
}

module.exports = {UserValidator};
