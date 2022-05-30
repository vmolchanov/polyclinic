const {User} = require('./user.model');
const {Role} = require('../role/role.model');
const {ApiError} = require('../../errors/api');
const bcrypt = require('bcrypt');
const {tokenService} = require('@c/token/token.service');
const {UserDto} = require('./user.dto');
const {organizationService} = require('@c/organization/organization.service');
const {postService} = require('@c/post/post.service');
const {roleService} = require('@c/role/role.service');
const {DBService} = require('../../utils/dbservice');

class UserService {
    async getUser(id) {
        const user = await DBService.getEntityById(id, User);
        return new UserDto({
            ...user.toObject(),
            role: user.role && await roleService.getRole(user.role),
            post: user.post && await postService.getPost(user.post),
            organization: user.organization && await organizationService.getOrganization(user.organization),
        });
    }

    async getAllUsers() {
        const users = await DBService.getEntities(User);

        for (let i = 0; i < users.length; i++) {
            users[i] = new UserDto({
                ...users[i].toObject(),
                role: users[i].role && await roleService.getRole(users[i].role),
                post: users[i].post && await postService.getPost(users[i].post),
                organization: users[i].organization && await organizationService.getOrganization(users[i].organization),
            });
        }

        return users;
    }

    async getUsersByRole(roleName) {
        const role = await Role.findOne({value: roleName});
        if (!role) {
            throw ApiError.BadRequest(`Role ${roleName} not found`, ['role']);
        }
        const users = await User.find({role: role.id});

        for (let i = 0; i < users.length; i++) {
            users[i] = new UserDto({
                ...users[i].toObject(),
                role: users[i].role && await roleService.getRole(users[i].role),
                post: users[i].post && await postService.getPost(users[i].post),
                organization: users[i].organization && await organizationService.getOrganization(users[i].organization),
            });
        }

        return users;
    }

    async getCurrentUser(token) {
        const {id} = tokenService.validateToken(token, 'access');
        const user = await this.getUser(id);
        return user;
    }

    async editUser({id, ...data}) {
        const user = await DBService.editEntity(id, data, User);
        return new UserDto(user);
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

        const role = await Role.findOne({value: 'patient'});

        const user = new User({
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            secondName: userData.secondName,
            password: hashPassword,
            phone: userData.phone,
            cabinet: userData.cabinet,
            role,
        });
        await user.save();
    }
}

module.exports.userService = new UserService();
