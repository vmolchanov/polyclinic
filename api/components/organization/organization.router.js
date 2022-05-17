const {OrganizationValidator} = require('./organization.validator');
const {organizationController} = require('./organization.controller');
const router = require('../../utils/router').createRouter();

router.get('/', organizationController.getAllOrganizations);

router.get('/:id', OrganizationValidator.getOrganization, organizationController.getOrganization);

router.post('/', OrganizationValidator.addOrganization, organizationController.addOrganization);

router.put('/', OrganizationValidator.editOrganization, organizationController.editOrganization);

router.delete('/', OrganizationValidator.removeOrganization, organizationController.removeOrganization);

module.exports.organizationRouter = router;
