const {ReceptionValidator} = require('./reception.validator');
const {receptionController} = require('./reception.controller');
const router = require('@/utils/router').createRouter();

router.get('/', receptionController.getAllReceptions);

router.get('/:id', ReceptionValidator.getReception, receptionController.getReception);

router.get('/reserved/:date', ReceptionValidator.getReservedTimesByDate, receptionController.getReservedTimesByDate);

router.post('/', ReceptionValidator.addReception, receptionController.addReception);

router.put('/', ReceptionValidator.editReception, receptionController.editReception);

router.delete('/', ReceptionValidator.removeReception, receptionController.removeReception);

module.exports.receptionRouter = router;

