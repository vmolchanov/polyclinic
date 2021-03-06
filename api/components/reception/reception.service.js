const {ReceptionDto} = require('@c/reception/reception.dto');
const {Reception} = require('@c/reception/reception.model');
const {DBService} = require('@/utils/dbservice');
const {userService} = require('../user/user.service');

class ReceptionService {
    async getReception(id) {
        const reception = await DBService.getEntityById(id, Reception);
        reception.user = await userService.getUser(reception.user);
        reception.patient = await userService.getUser(reception.patient);
        return new ReceptionDto(reception);
    }

    async getReservedTimesByDate({date, user}) {
        const findData = {date, user};
        const receptions = await Reception.find(findData);

        for (let i = 0; i < receptions.length; i++) {
            receptions[i] = new ReceptionDto({
                ...receptions[i].toObject(),
                user: await userService.getUser(receptions[i].user),
                patient: await userService.getUser(receptions[i].patient),
            });
        }

        return receptions;
    }

    async getAllReceptions() {
        const receptions = await DBService.getEntities(Reception);

        for (let i = 0; i < receptions.length; i++) {
            receptions[i].user = await userService.getUser(receptions[i].user);
            receptions[i].patient = await userService.getUser(receptions[i].patient);
            receptions[i] = new ReceptionDto(receptions[i]);
        }

        return receptions;
    }

    async getReceptionsByPatient({patientId}) {
        const receptions = await Reception
          .find({patient: patientId})
          .sort({date: -1, time: -1});
        return await this.getReceptionDtos(receptions);
    }

    async addReception(data) {
        const reception = await DBService.addEntity(data, Reception);
        return new ReceptionDto(reception);
    }

    async editReception(id, {name, email, date, time, user, review = null}) {
        const data = {name, email, date, time, user};
        if (review !== null) {
            data.review = review;
        }
        const reception = await DBService.editEntity(id, data, Reception);
        return new ReceptionDto(reception);
    }

    async removeReception(id) {
        const reception = await DBService.removeEntity(id, Reception);
        return new ReceptionDto(reception);
    }

    async getReceptionDto(reception) {
        const dto = new ReceptionDto(reception);
        dto.user = await userService.getUser(dto.user);
        dto.patient = await userService.getUser(dto.patient);
        return dto;
    }

    async getReceptionDtos(rawReceptions) {
        const receptionDtos = [];

        for (let i = 0; i < rawReceptions.length; i++) {
            const receptionDto = await this.getReceptionDto(rawReceptions[i]);
            receptionDtos.push(receptionDto);
        }

        return receptionDtos;
    }
}

module.exports.receptionService = new ReceptionService();
