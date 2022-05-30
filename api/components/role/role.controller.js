const {BaseController} = require('../../utils/router');
const {roleService} = require('./role.service');

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
            res.json(role);
        });
    }

    async getAllRoles(req, res, next) {
        this.exec(req, next, async () => {
            const roles = await roleService.getAllRoles();
            res.json(roles);
        });
    }

    async addRole(req, res, next) {
        this.exec(req, next, async () => {
            const role = await roleService.addRole(req.body.value);
            res.json({status: 'success', data: role});
        });
    }

    async editRole(req, res, next) {
        this.exec(req, next, async () => {
            const role = roleService.editRole(req.body.id, req.body.value);
            res.json({status: 'success', data: role});
        });
    }

    async removeRole(req, res, next) {
        this.exec(req, next, async () => {
            const role = roleService.removeRole(req.body.id);
            res.json({status: 'success', data: role});
        });
    }
}

module.exports.roleController = new RoleController();
