const {body, query, cookie} = require('express-validator');

class TokenValidator {
    static get getAllTokens() {
        return [
            query('userId').isString().notEmpty(),
        ];
    }

    static get addToken() {
        return [
            body('email').isString().notEmpty(),
        ];
    }

    static get editToken() {
        return [
            body('userId').isString().notEmpty(),
        ];
    }

    static get removeToken() {
        return [
            cookie('refreshToken').isJWT(),
        ];
    }
}

module.exports = {TokenValidator};
