const jwt = require('jsonwebtoken');
const {ApiError} = require('../../errors/api');
const {Token} = require('./token.model');
const {User} = require('../user/user.model');
const {accessSecret, refreshSecret} = require('../../config').jwt;
const {UserDto} = require('../../dtos/user');

class TokenService {
    /**
     * Генерирует новые токены и добавляет refresh токен в базу данных
     * @param {string} email
     * @returns {Promise<{accessToken: (*), refreshToken: (*)}>}
     */
    async addToken(email) {
        const user = await User.findOne({email});
        if (!user) {
            throw ApiError.BadRequest(`User with email ${email} not found`);
        }

        const tokens = this.generateTokens({...new UserDto(user)});
        const candidate = await Token.findOne({user: user._id});
        if (candidate) {
            candidate.tokens.push(tokens.refreshToken);
            await candidate.save();
        } else {
            const token = new Token({user: user._id, tokens: [tokens.refreshToken]});
            await token.save();
        }
        return tokens;
    }

    /**
     * Генерирует пару access и refresh токенов
     * @param {UserDto} payload
     * @returns {{accessToken: (*), refreshToken: (*)}}
     */
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, accessSecret, {expiresIn: '5m'});
        const refreshToken = jwt.sign(payload, refreshSecret, {expiresIn: '30d'});
        return {accessToken, refreshToken};
    }

    /**
     * Возвращает все токены для пользователя
     * @param {mongoose.ObjectId} userId - идентификатор пользователя в базе данных
     * @returns {Promise<[*]|{default: [], type: [StringConstructor]}|*>}
     */
    async getUserTokens(userId) {
        const token = await Token.findOne({user: userId});
        return token?.tokens;
    }

    /**
     * Удаляет из базы старый refresh токен и генерирует новую пару access и refresh токенов
     * @param (string) token - refresh токен
     * @returns {Promise<{accessToken: *, refreshToken: *}>}
     */
    async refreshToken(token) {
        const {email} = this.validateToken(token, 'refresh');
        const user = await User.findOne({email});
        if (!user) {
            throw ApiError.Unauthorized();
        }
        const userToken = await Token.findOne({user: user._id});
        if (!userToken) {
            throw ApiError.BadRequest('User not found');
        }
        const index = userToken.tokens.indexOf(token);
        if (index === -1) {
            throw ApiError.Unauthorized();
        }
        userToken.tokens.splice(index, 1);

        const tokens = this.generateTokens({...new UserDto(user)});
        userToken.tokens.push(tokens.refreshToken);
        await userToken.save();

        return tokens;
    }

    /**
     * Удаляет токен из базы данных
     * @param {string} refreshToken
     * @returns {Promise<*>}
     */
    async removeToken(refreshToken) {
        const {email} = this.validateToken(refreshToken, 'refresh');

        const user = await User.findOne({email});
        if (!user) {
            throw ApiError.BadRequest(`User with email ${email} not found`);
        }

        const token = await Token.findOne({user: user._id});
        if (!token) {
            throw ApiError.Unauthorized();
        }

        const index = token.tokens.indexOf(refreshToken);
        if (index === -1) {
            throw ApiError.BadRequest('Incorrect token');
        }
        token.tokens.splice(index, 1);
        await token.save();

        return refreshToken;
    }

    /**
     * Функция проверяет корректность токена и расшифровывает его
     * @param {string} token
     * @param {string} type – access или refresh
     * @returns {UserDto}
     */
    validateToken(token, type) {
        const secret = {
            access: accessSecret,
            refresh: refreshSecret
        };
        if (!token) {
            throw ApiError.Unauthorized();
        }
        const payload = jwt.verify(token, secret[type]);
        if (!payload) {
            throw ApiError.Unauthorized();
        }
        return payload;
    }
}

module.exports.tokenService = new TokenService();
