const {tokenService} = require('../components/token/token.service');
const {ApiError} = require('../errors/api');

const adminMiddleware = (req, res, next) => {
    try {
        const [, accessToken] = req.headers.authorization.split(' ');
        const userData = tokenService.validateToken(accessToken, 'access');
        if (!userData.roles.includes('admin')) {
            throw null;
        }
        next();
    } catch(err) {
        return next(ApiError.Forbidden());
    }
};

module.exports.adminMiddleware = adminMiddleware;
