const router = require('../../utils/router').createRouter();
const {userController} = require('./user.controller');
const {body, cookie} = require('express-validator');

router.post(
    '/login',
    cookie('refreshToken').isEmpty(),
    body('email').isString().isEmail().notEmpty(),
    body('password').isString().notEmpty(),
    userController.login
);
router.post(
    '/signup',
    cookie('refreshToken').isEmpty(),
    body('avatar').isString().optional(),
    body('birthDay').isDate().optional(),
    body('email').isString().isEmail().notEmpty(),
    body('firstName').isString().optional(),
    body('lastName').isString().optional(),
    body('nickname').isString().notEmpty(),
    body('password').isString().notEmpty(),
    userController.signup
);
router.delete(
    '/logout',
    cookie('refreshToken').notEmpty().isJWT(),
    userController.logout
);

module.exports.userRouter = router;
