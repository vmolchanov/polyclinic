const router = require('../../utils/router').createRouter();
const {UserValidator} = require('./user.validator');
const {userController} = require('./user.controller');

router.get('/', userController.getAllUsers);
router.get('/role/:role', userController.getUsersByRole);
router.get('/:id', userController.getUser);

router.post('/login', UserValidator.login, userController.login);
router.post('/signup', UserValidator.singup, userController.signup);
router.delete('/logout', UserValidator.logout, userController.logout);

module.exports.userRouter = router;
