const {TokenValidator} = require('./token.validator');
const router = require('../../utils/router').createRouter();
const {tokenController} = require('./token.controller');

router.get('/all', TokenValidator.getAllTokens, tokenController.allTokens);

router.post('/add', TokenValidator.addToken, tokenController.add);

router.put('/refresh', TokenValidator.editToken, tokenController.refresh);

router.delete('/remove', TokenValidator.removeToken, tokenController.remove);

module.exports.tokenRouter = router;
