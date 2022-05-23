const {authMiddleware} = require('@/middlewares/auth');
const router = require('../../utils/router').createRouter();
const {UserValidator} = require('./user.validator');
const {userController} = require('./user.controller');

router.get('/', authMiddleware, userController.getAllUsers);
router.get('/role/:role', authMiddleware, userController.getUsersByRole);
router.get('/:id', authMiddleware, userController.getUser);
router.put('/', authMiddleware, UserValidator.editUser, userController.editUser);

router.post('/login', UserValidator.login, userController.login);
router.post('/signup', UserValidator.singup, userController.signup);
router.delete('/logout', authMiddleware, UserValidator.logout, userController.logout);

module.exports.userRouter = router;
