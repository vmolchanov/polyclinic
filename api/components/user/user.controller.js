const {BaseController} = require('@/utils/router');
const {validationResult} = require('express-validator');
const {ApiError} = require('../../errors/api');
const {userService} = require('./user.service');

class UserController extends BaseController {
    constructor() {
        super();

        this.getUser = this.getUser.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.getUsersByRole = this.getUsersByRole.bind(this);
        this.getCurrentUser = this.getCurrentUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    async getUser(req, res, next) {
        this.exec(req, next, async () => {
            const user = await userService.getUser(req.params.id);
            res.json(user);
        });
    }

    async getAllUsers(req, res, next) {
        this.exec(req, next, async () => {
            const users = await userService.getAllUsers();
            res.json(users);
        });
    }

    async getUsersByRole(req, res, next) {
        this.exec(req, next, async () => {
            const users = await userService.getUsersByRole(req.params.role);
            res.json(users);
        });
    }

    async getCurrentUser(req, res, next) {
        this.exec(req, next, async () => {
            const user = await userService.getCurrentUser(req.headers.authorization.split(' ')[1]);
            res.json(user);
        });
    }

    async editUser(req, res, next) {
        this.exec(req, next, async () => {
            const user = await userService.editUser(req.body);
            res.json(user);
        });
    }

    async login(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.UnprocessableEntity('Validation error', errors.array()));
        }
        try {
            await userService.login(req.body.email, req.body.password);
            res.redirect(307, '/api/token/add');
        } catch(err) {
            next(err);
        }
    }

    logout(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('User not logged in', errors.array()));
            }
            res.redirect(307, '/api/token/remove');
        } catch(err) {
            next(err);
        }
    }

    async signup(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.UnprocessableEntity('Validation error', errors.array()));
            }
            await userService.signup(req.body);
            res.redirect(307, '/api/token/add');
        } catch(err) {
            next(err);
        }
    }
}

module.exports.userController = new UserController();
