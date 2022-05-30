const {authMiddleware} = require('@/middlewares/auth');
const {OrganizationValidator} = require('./organization.validator');
const {organizationController} = require('./organization.controller');
const router = require('../../utils/router').createRouter();

router.get(
  '/',
  authMiddleware,
  organizationController.getAllOrganizations
);

router.get(
  '/:id',
  authMiddleware,
  OrganizationValidator.getOrganization,
  organizationController.getOrganization
);

router.post(
  '/',
  authMiddleware,
  OrganizationValidator.addOrganization,
  organizationController.addOrganization
);

router.put(
  '/',
  authMiddleware,
  OrganizationValidator.editOrganization,
  organizationController.editOrganization
);

router.delete(
  '/',
  authMiddleware,
  OrganizationValidator.removeOrganization,
  organizationController.removeOrganization
);

module.exports.organizationRouter = router;
