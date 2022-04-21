const {Organization} = require('./organization.model');
const {DBService} = require('../../utils/dbservice');

class OrganizationService {
    async getOrganization(id) {
        return DBService.getEntityById(id, Organization);
    }

    async addOrganization(title, address, phone) {
        const data = {title};
        if (address !== undefined) {
            data.address = address;
        }
        if (phone !== undefined) {
            data.phone = phone;
        }
        return DBService.addEntity(data, Organization);
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
        return DBService.editEntity(id, data, Organization);
    }

    async removeOrganization(id) {
        return DBService.removeEntity(id, Organization);
    }
}

module.exports.organizationService = new OrganizationService();
