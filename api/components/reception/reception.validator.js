const {body, param, query} = require('express-validator');

class ReceptionValidator {
    static get getReception() {
        return [
            param('id').isString().notEmpty()
        ];
    }

    static get getReservedTimesByDate() {
        return [
            param('date').isDate().notEmpty(),
            query('user').isString().optional({nullable: true}),
        ];
    }

    static get addReception() {
        return [
            body('name').isString().notEmpty(),
            body('email').isString().notEmpty(),
            body('date').isDate().notEmpty(),
            body('time').isString().notEmpty(),
            body('user').isString(),
        ];
    }

    static get editReception() {
        return [
            body('name').isDate().notEmpty(),
            body('email').isDate().notEmpty(),
            body('date').isDate().notEmpty(),
            body('time').isString().notEmpty(),
            body('user').isString(),
        ];
    }

    static get removeReception() {
        return [
            body('id').isString().notEmpty()
        ];
    }
}

module.exports = {ReceptionValidator};
