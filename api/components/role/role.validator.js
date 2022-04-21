const {body, param} = require('express-validator');

export class RoleValidator {
    static get getRole() {
        return [
            param('id').isString().notEmpty()
        ];
    }

    static get addRole() {
        return [
            body('value').isString().notEmpty()
        ];
    }

    static get editRole() {
        return [
            body('id').isString().notEmpty(),
            body('value').isString().notEmpty()
        ];
    }

    static get removeRole() {
        return [
            body('id').isString().notEmpty(),
        ];
    }
}

module.exports.RoleValidator = RoleValidator;
