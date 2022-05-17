const {Reception} = require('@c/reception/reception.model');
const {DBService} = require('@/utils/dbservice');
const {userService} = require('../user/user.service');

class ReceptionService {
    async getReception(id) {
        return DBService.getEntityById(id, Reception);
    }

    async getReservedTimesByDate({date, user}) {
        const findData = {date};
        findData.user = user;
        const receptions = await Reception.find(findData);
        return receptions.map(reception => reception.time)
    }

    async getAllReceptions() {
        const receptions = await DBService.getEntities(Reception);

        for (let i = 0; i < receptions.length; i++) {
            receptions[i].user = await userService.getUser(receptions[i].user);
        }

        return receptions;
    }

    async addReception({name, email, date, time, user}) {
        const data = {name, email, date, time, user};
        return DBService.addEntity(data, Reception);
    }

    async editReception(id, {name, email, date, time, user}) {
        const data = {name, email, date, time, user};
        return DBService.editEntity(id, data, Reception);
    }

    async removeReception(id) {
        return DBService.removeEntity(id, Reception);
    }
}

module.exports.receptionService = new ReceptionService();
