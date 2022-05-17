const {BaseController} = require('../../utils/router');
const {roleService} = require('./role.service');
const {RoleDto} = require('./role.dto');

class RoleController extends BaseController {
    constructor() {
        super();
        this.getRole = this.getRole.bind(this);
        this.getAllRoles = this.getAllRoles.bind(this);
        this.addRole = this.addRole.bind(this);
        this.editRole = this.editRole.bind(this);
        this.editRole = this.editRole.bind(this);
    }


    async getRole(req, res, next) {
        this.exec(req, next, async () => {
            const role = await roleService.getRole(req.params.id);
            const dto = new RoleDto(role);
            res.json(dto);
        });
    }

    async getAllRoles(req, res, next) {
        this.exec(req, next, async () => {
            const roles = await roleService.getAllRoles();
            const dtos = roles.map(role => new RoleDto(role));
            res.json(dtos);
        });
    }

    async addRole(req, res, next) {
        this.exec(req, next, async () => {
            const role = await roleService.addRole(req.body.value);
            const dto = new RoleDto(role);
            res.json({status: 'success', data: dto});
        });
    }

    async editRole(req, res, next) {
        this.exec(req, next, async () => {
            const role = roleService.editRole(req.body.id, req.body.value);
            const dto = new RoleDto(role);
            res.json({status: 'success', data: dto});
        });
    }

    async removeRole(req, res, next) {
        this.exec(req, next, async () => {
            const role = roleService.removeRole(req.body.id);
            const dto = new RoleDto(role);
            res.json({status: 'success', data: dto});
        });
    }
}

module.exports.roleController = new RoleController();
