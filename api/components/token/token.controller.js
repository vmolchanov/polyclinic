const {BaseController} = require('../../utils/router');
const {tokenService} = require('./token.service');

class TokenController extends BaseController {
    async add(req, res, next) {
        this.exec(req, next, async () => {
            const tokens = await tokenService.addToken(req.body.email);
            res.cookie('refreshToken', tokens.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            });
            res.json({status: 'success', data: tokens.accessToken});
        });
    }

    allTokens(req, res, next) {
        this.exec(req, next, async () => {
            const tokens = tokenService.getUserTokens(req.query.userId);
            res.json({status: 'success', data: tokens ?? null});
        });
    }

    async refresh(req, res, next) {
        this.exec(req, next, async () => {
            const tokens = await tokenService.refreshToken(req.cookies.refreshToken);
            res.cookie('refreshToken', tokens.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            });
            res.json({status: 'success', data: tokens.accessToken});
        });
    }

    remove(req, res, next) {
        this.exec(req, next, async () => {
            const token = tokenService.removeToken(req.cookies.refreshToken);
            res.clearCookie('refreshToken');
            res.json({status: 'success', data: token});
        });
    }
}

module.exports.tokenController = new TokenController();
