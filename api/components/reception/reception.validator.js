const {body, param, query} = require('express-validator');

class ReceptionValidator {
    static get getReception() {
        return [
            param('id').isString().notEmpty()
        ];
    }

    static get getReceptionsByPatient() {
        return [
          param('patientId').isString().notEmpty(),
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
            body('patient').isString(),
            body('review').isString().optional({nullable: true}),
        ];
    }

    static get editReception() {
        return [
            body('name').isString().optional({nullable: true}),
            body('email').isEmail().optional({nullable: true}),
            body('date').isDate().notEmpty(),
            body('time').isString().notEmpty(),
            body('user').isString(),
            body('patient').isString(),
            body('review').isString().optional({nullable: true}),
        ];
    }

    static get removeReception() {
        return [
            body('id').isString().notEmpty()
        ];
    }
}

module.exports = {ReceptionValidator};
