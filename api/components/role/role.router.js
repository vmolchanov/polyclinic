import {RoleValidator} from './role.validator';
const router = require('../../utils/router').createRouter();
const {roleController} = require('./role.controller');

router.get('/:id', RoleValidator.getRole, roleController.getRole);

router.post('/', RoleValidator.addRole, roleController.addRole);

router.put('/', RoleValidator.editRole, roleController.editRole);

router.delete('/', RoleValidator.removeRole, roleController.removeRole);

module.exports.roleRouter = router;
