const {BaseController} = require('@/');
const {organizationService} = require('./organization.service');

class OrganizationController extends BaseController {
    constructor() {
        super();

        this.getOrganization = this.getOrganization.bind(this);
        this.addOrganization = this.addOrganization.bind(this);
        this.editOrganization = this.editOrganization.bind(this);
        this.removeOrganization = this.removeOrganization.bind(this);
    }

    async getOrganization(req, res, next) {
        this.exec(req, next, async () => {
            const organization = await organizationService.getOrganization(req.params.id);
            res.json(organization);
        });
    }

    async addOrganization(req, res, next) {
        this.exec(req, next, async () => {
            const organization = await organizationService.addOrganization(
                req.body.title,
                req.body.address,
                req.body.phone,
            );
            res.json({status: 'success', data: organization});
        });
    }

    async editOrganization(req, res, next) {
        this.exec(req, next, async () => {
            const organization = await organizationService.editOrganization(
                req.body.id,
                req.body.title,
                req.body.address,
                req.body.phone,
            );
            res.json({status: 'success', data: organization});
        });
    }

    async removeOrganization(req, res, next) {
        this.exec(req, next, async () => {
            const organization = await organizationService.removeOrganization(req.body.id);
            res.json({status: 'success', data: organization});
        });
    }
}

module.exports.organizationController = new OrganizationController();
