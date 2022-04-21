const {receptionService} = require('@c/reception/reception.service');
const {BaseController} = require('@/utils/router');

class ReceptionController extends BaseController {
    constructor() {
        super();

        this.getReception = this.getReception.bind(this);
        this.addReception = this.addReception.bind(this);
        this.editReception = this.editReception.bind(this);
        this.removeReception = this.removeReception.bind(this);
    }

    async getReception(req, res, next) {
        this.exec(req, next, async () => {
            const reception = await receptionService.getReception(req.params.id);
            res.json(reception);
        });
    }

    async addReception(req, res, next) {
        this.exec(req, next, async () => {
            const reception = await receptionService.addReception({
                day: req.body.day,
                timeFrom: req.body.timeFrom,
                timeTo: req.body.timeTo,
                user: req.body.user,
            });
            res.json({status: 'success', data: reception});
        });
    }

    async editReception(req, res, next) {
        this.exec(req, next, async () => {
            const reception = await receptionService.editReception(req.body.id, {
                day: req.body.day,
                timeFrom: req.body.timeFrom,
                timeTo: req.body.timeTo,
            });
            res.json({status: 'success', data: reception});
        });
    }

    async removeReception(req, res, next) {
        this.exec(req, next, async () => {
            const reception = await receptionService.removeReception(req.body.id);
            res.json({status: 'success', data: reception});
        });
    }
}

module.exports.receptionController = new ReceptionController();
