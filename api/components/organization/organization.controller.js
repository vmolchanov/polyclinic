const {OrganizationDto} = require('@c/organization/organization.dto');
const {BaseController} = require('../../utils/router');
const {organizationService} = require('./organization.service');

class OrganizationController extends BaseController {
    constructor() {
        super();

        this.getOrganization = this.getOrganization.bind(this);
        this.getAllOrganizations = this.getAllOrganizations.bind(this);
        this.addOrganization = this.addOrganization.bind(this);
        this.editOrganization = this.editOrganization.bind(this);
        this.removeOrganization = this.removeOrganization.bind(this);
    }

    async getOrganization(req, res, next) {
        this.exec(req, next, async () => {
            const organization = await organizationService.getOrganization(req.params.id);
            const dto = new OrganizationDto(organization);
            res.json(dto);
        });
    }

    async getAllOrganizations(req, res, next) {
        this.exec(req, next, async () => {
            const organizations = await organizationService.getAllOrganizations();
            const dtos = organizations.map(organization => new OrganizationDto(organization));
            res.json(dtos);
        });
    }

    async addOrganization(req, res, next) {
        this.exec(req, next, async () => {
            const organization = await organizationService.addOrganization(
                req.body.title,
                req.body.address,
                req.body.phone,
            );
            const dto = new OrganizationDto(organization);
            res.json({status: 'success', data: dto});
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
            const dto = new OrganizationDto(organization);
            res.json({status: 'success', data: dto});
        });
    }

    async removeOrganization(req, res, next) {
        this.exec(req, next, async () => {
            const organization = await organizationService.removeOrganization(req.body.id);
            const dto = new OrganizationDto(organization);
            res.json({status: 'success', data: dto});
        });
    }
}

module.exports.organizationController = new OrganizationController();
