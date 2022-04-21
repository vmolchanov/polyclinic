const {body, param} = require('express-validator');

class PostValidator {
    static get getPost() {
        return [
            param('id').isString().notEmpty(),
        ];
    }

    static get addPost() {
        return [
            body('title').isString().notEmpty(),
        ];
    }

    static get editPost() {
        return [
            body('id').isString().notEmpty(),
            body('title').isString().notEmpty(),
        ];
    }

    static get removePost() {
        return [
            body('id').isString().notEmpty(),
        ];
    }
}

module.exports.PostValidator = PostValidator;
