const {body, param} = require('express-validator');

class ReceptionValidator {
    static get getReception() {
        return [
            param('id').isString().notEmpty()
        ];
    }

    static get addReception() {
        return [
            body('day').isNumeric().notEmpty(),
            body('timeFrom').isNumeric(),
            body('timeTo').isNumeric(),
            body('user').isString()
        ];
    }

    static get editReception() {
        return [
            body('id').isString().notEmpty(),
            body('day').isNumeric(),
            body('timeFrom').isNumeric(),
            body('timeTo').isNumeric()
        ];
    }

    static get removeReception() {
        return [
            body('id').isString().notEmpty()
        ];
    }
}

module.exports = {ReceptionValidator};
