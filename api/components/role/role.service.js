const {RoleDto} = require('@c/role/role.dto');
const {Role} = require('./role.model');
const {DBService} = require('../../utils/dbservice');

class RoleService {
    async getRole(id) {
        return new RoleDto(await DBService.getEntityById(id, Role));
    }

    async getAllRoles() {
        const roles = await DBService.getEntities(Role);
        return roles.map(role => new RoleDto(role));
    }

    async addRole(value) {
        return new RoleDto(
          await DBService.addEntity({value}, Role, ['value'])
        );
    }

    async editRole(id, value) {
        return new RoleDto(
          await DBService.editEntity(id, {value}, Role)
        );
    }

    async removeRole(id) {
        return new RoleDto(await DBService.removeEntity(id, Role));
    }
}

module.exports.roleService = new RoleService();
