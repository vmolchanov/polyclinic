const {ReceptionValidator} = require('./reception.validator');
const {receptionController} = require('./reception.controller');
const router = require('@/utils/router').createRouter();

router.get('/:id', ReceptionValidator.getReception, receptionController.getReception);

router.post('/', ReceptionValidator.addReception, receptionController.addReception);

router.put('/', ReceptionValidator.editReception, receptionController.editReception);

router.delete('/', ReceptionValidator.removeReception, receptionController.removeReception);

module.exports.organizationRouter = router;

