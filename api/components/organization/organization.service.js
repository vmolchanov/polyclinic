const {OrganizationDto} = require('@c/organization/organization.dto');
const {Organization} = require('./organization.model');
const {DBService} = require('../../utils/dbservice');

class OrganizationService {
    async getOrganization(id) {
        return new OrganizationDto(await DBService.getEntityById(id, Organization));
    }

    async getAllOrganizations() {
        const organizations = await DBService.getEntities(Organization);
        return organizations.map(organization => new OrganizationDto(organization));
    }

    async addOrganization(title, address, phone) {
        const data = {title};
        if (address !== undefined) {
            data.address = address;
        }
        if (phone !== undefined) {
            data.phone = phone;
        }
        return new OrganizationDto(await DBService.addEntity(data, Organization));
    }

    async editOrganization(id, title, address, phone) {
        const data = {};
        if (title !== undefined) {
            data.title = title;
        }
        if (address !== undefined) {
            data.address = address;
        }
        if (phone !== undefined) {
            data.phone = phone;
        }
        return new OrganizationDto(await DBService.editEntity(id, data, Organization));
    }

    async removeOrganization(id) {
        return new OrganizationDto(await DBService.removeEntity(id, Organization));
    }
}

module.exports.organizationService = new OrganizationService();
