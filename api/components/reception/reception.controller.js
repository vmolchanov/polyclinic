const {receptionService} = require('@c/reception/reception.service');
const {BaseController} = require('@/utils/router');

class ReceptionController extends BaseController {
    constructor() {
        super();

        this.getReception = this.getReception.bind(this);
        this.getAllReceptions = this.getAllReceptions.bind(this);
        this.getReceptionsByPatient = this.getReceptionsByPatient.bind(this);
        this.addReception = this.addReception.bind(this);
        this.editReception = this.editReception.bind(this);
        this.removeReception = this.removeReception.bind(this);
        this.getReservedTimesByDate = this.getReservedTimesByDate.bind(this);
    }

    async getReception(req, res, next) {
        this.exec(req, next, async () => {
            const reception = await receptionService.getReception(req.params.id);
            res.json(reception);
        });
    }

    async getAllReceptions(req, res, next) {
        this.exec(req, next, async () => {
            const receptions = await receptionService.getAllReceptions();
            res.json(receptions);
        });
    }

    async getReceptionsByPatient(req, res, next) {
        this.exec(req, next, async () => {
            const receptions = await receptionService.getReceptionsByPatient(req.params);
            res.json(receptions);
        });
    }

    async getReservedTimesByDate(req, res, next) {
        this.exec(req, next, async () => {
            const times = await receptionService.getReservedTimesByDate({
                ...req.params,
                ...req.query,
            });
            res.json(times);
        });
    }

    async addReception(req, res, next) {
        this.exec(req, next, async () => {
            const reception = await receptionService.addReception(req.body);
            res.json({status: 'success', data: reception});
        });
    }

    async editReception(req, res, next) {
        this.exec(req, next, async () => {
            const reception = await receptionService.editReception(req.body.id, req.body);
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
