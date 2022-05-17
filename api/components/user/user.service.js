const {User} = require('./user.model');
const {Role} = require('../role/role.model');
const {Post} = require('../post/post.model');
const {ApiError} = require('../../errors/api');
const bcrypt = require('bcrypt');
const {DBService} = require('../../utils/dbservice');

class UserService {
    async getUser(id) {
        return DBService.getEntityById(id, User);
    }

    async getAllUsers() {
        return DBService.getEntities(User);
    }

    async getUsersByRole(roleName) {
        const role = await Role.findOne({value: roleName});
        if (!role) {
            throw ApiError.BadRequest(`Role ${roleName} not found`, ['role']);
        }
        const users = User.find({role: role.id});

        for (let i = 0; i < users.length; i++) {
            users[i].post = await Post.findById(users[i].post);
        }

        return users;
    }

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
        const hashPassword = await bcrypt.hash(userData.password, 3);
        const user = new User({
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            password: hashPassword,
            phone: userData.phone,
            cabinet: userData.cabinet,
        });
        await user.save();
    }
}

module.exports.userService = new UserService();
