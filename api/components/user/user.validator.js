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
            body('phone').isString().optional({nullable: true}),
            body('firstName').isString().notEmpty(),
            body('lastName').isString().notEmpty(),
            body('secondName').isString().optional({nullable: true}),
            body('cabinet').isString().optional({nullable: true}),
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
