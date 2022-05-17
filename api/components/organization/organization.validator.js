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
            body('address').isString().optional({nullable: true}),
            body('phone').isString().optional({nullable: true})
        ];
    }

    static get editOrganization() {
        return [
            body('id').isString().notEmpty(),
            body('title').isString().optional({nullable: true}),
            body('address').isString().optional({nullable: true}),
            body('phone').isString().optional({nullable: true})
        ];
    }

    static get removeOrganization() {
        return [
            body('id').isString().notEmpty()
        ];
    }
}

module.exports = {OrganizationValidator};
