const {Role} = require('./role.model');
const {DBService} = require('../../utils/dbservice');

class RoleService {
    async getRole(id) {
        return DBService.getEntityById(id, Role);
    }

    async addRole(value) {
        return DBService.addEntity({value}, Role, ['value']);
    }

    async editRole(id, value) {
        return DBService.editEntity(id, {value}, Role);
    }

    async removeRole(id) {
        return DBService.removeEntity(id, Role);
    }
}

module.exports.roleService = new RoleService();
