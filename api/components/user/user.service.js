const {User} = require('./user.model');
const {ApiError} = require('../../errors/api');
const bcrypt = require('bcrypt');

class UserService {
    async login(email, password) {
        const user = await User.findOne({email});
        if (user === null) {
            throw ApiError.BadRequest(`User with email ${email} not found`, ['email']);
        }
        const isSamePassword = await bcrypt.compare(password, user.password);
        if (!isSamePassword) {
            throw ApiError.BadRequest('Incorrect password', ['password']);
        }
    }

    async signup(userData) {
        const userByEmail = await User.findOne({email: userData.email});
        if (userByEmail !== null) {
            throw ApiError.Conflict(`User with email ${userData.email} already exists.`, [
                'email'
            ]);
        }
        const userByNickname = await User.findOne({nickname: userData.nickname});
        if (userByNickname !== null) {
            throw ApiError.Conflict(`User with nickname ${userData.nickname} already exists.`, [
                'nickname'
            ]);
        }
        const hashPassword = await bcrypt.hash(userData.password, 3);
        const user = new User({
            avatar: userData.avatar,
            birthDay: userData.birthDay,
            created: Date.now(),
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            nickname: userData.nickname,
            password: hashPassword,
            roles: ['user']
        });
        await user.save();
    }
}

module.exports.userService = new UserService();
