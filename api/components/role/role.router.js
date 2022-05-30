const {RoleValidator} = require('./role.validator');
const router = require('../../utils/router').createRouter();
const {roleController} = require('./role.controller');
const {authMiddleware} = require('../../middlewares/auth');

router.get('/', authMiddleware, roleController.getAllRoles);

router.get('/:id', authMiddleware, RoleValidator.getRole, roleController.getRole);

router.post('/', authMiddleware, RoleValidator.addRole, roleController.addRole);

router.put('/', authMiddleware, RoleValidator.editRole, roleController.editRole);

router.delete('/', authMiddleware, RoleValidator.removeRole, roleController.removeRole);

module.exports.roleRouter = router;
