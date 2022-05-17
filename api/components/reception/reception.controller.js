const {receptionService} = require('@c/reception/reception.service');
const {BaseController} = require('@/utils/router');
const {ReceptionDto} = require('./reception.dto');

class ReceptionController extends BaseController {
    constructor() {
        super();

        this.getReception = this.getReception.bind(this);
        this.getAllReceptions = this.getAllReceptions.bind(this);
        this.addReception = this.addReception.bind(this);
        this.editReception = this.editReception.bind(this);
        this.removeReception = this.removeReception.bind(this);
        this.getReservedTimesByDate = this.getReservedTimesByDate.bind(this);
    }

    async getReception(req, res, next) {
        this.exec(req, next, async () => {
            const reception = await receptionService.getReception(req.params.id);
            const dto = new ReceptionDto(reception);
            res.json(dto);
        });
    }

    async getAllReceptions(req, res, next) {
        this.exec(req, next, async () => {
            const receptions = await receptionService.getAllReceptions();
            const dtos = receptions.map(reception => new ReceptionDto(reception));
            res.json(dtos);
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
            const dto = new ReceptionDto(reception);
            res.json({status: 'success', data: dto});
        });
    }

    async editReception(req, res, next) {
        this.exec(req, next, async () => {
            const reception = await receptionService.editReception(req.body.id, req.body);
            const dto = new ReceptionDto(reception);
            res.json({status: 'success', data: dto});
        });
    }

    async removeReception(req, res, next) {
        this.exec(req, next, async () => {
            const reception = await receptionService.removeReception(req.body.id);
            const dto = new ReceptionDto(reception);
            res.json({status: 'success', data: dto});
        });
    }
}

module.exports.receptionController = new ReceptionController();
