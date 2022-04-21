const {ApiError} = require('../errors/api');
const {tokenService} = require('../components/token/token.service');

const authMiddleware = (req, res, next) => {
    try {
        const {authorization} = req.headers;
        if (!authorization) {
            throw null;
        }

        const [, accessToken] = authorization.split(' ');
        if (!accessToken) {
            throw null;
        }

        const userData = tokenService.validateToken(accessToken, 'access');
        if (!userData) {
            throw null;
        }

        req.user = userData;
        next();
    } catch(err) {
        return next(ApiError.Unauthorized());
    }
};

module.exports.authMiddleware = authMiddleware;
