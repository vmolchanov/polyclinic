const {body, param} = require('express-validator');

class OrganizationValidator {
    static get getOrganization() {
        return [
            param('id').isString().notEmpty()
        ];
    }

    static get addOrganization() {
        return [
            body('title').isString().notEmpty(),
            body('address').isString(),
            body('phone').isString()
        ];
    }

    static get editOrganization() {
        return [
            body('id').isString().notEmpty(),
            body('title').isString(),
            body('address').isString(),
            body('phone').isString()
        ];
    }

    static get removeOrganization() {
        return [
            body('id').isString().notEmpty()
        ];
    }
}

module.exports = {OrganizationValidator};
