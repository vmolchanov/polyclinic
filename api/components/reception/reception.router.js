const {authMiddleware} = require('@/middlewares/auth');
const {ReceptionValidator} = require('./reception.validator');
const {receptionController} = require('./reception.controller');
const router = require('@/utils/router').createRouter();

router.get(
  '/',
  authMiddleware,
  receptionController.getAllReceptions
);

router.get(
  '/:id',
  authMiddleware,
  ReceptionValidator.getReception,
  receptionController.getReception
);

router.get(
  '/reserved/:date',
  authMiddleware,
  ReceptionValidator.getReservedTimesByDate,
  receptionController.getReservedTimesByDate
);

router.post(
  '/',
  authMiddleware,
  ReceptionValidator.addReception,
  receptionController.addReception
);

router.put(
  '/',
  authMiddleware,
  ReceptionValidator.editReception,
  receptionController.editReception
);

router.delete(
  '/',
  authMiddleware,
  ReceptionValidator.removeReception,
  receptionController.removeReception
);

module.exports.receptionRouter = router;

