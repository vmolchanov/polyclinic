const {Reception} = require('@c/reception/reception.model');
const {DBService} = require('@/utils/dbservice');

class ReceptionService {
    async getReception(id) {
        return DBService.getEntityById(id, Reception);
    }

    async addReception({day, timeFrom, timeTo, user}) {
        const data = {day, timeFrom, timeTo, user};
        return DBService.addEntity(data, Reception);
    }

    async editReception(id, {day, timeFrom, timeTo}) {
        const data = {};
        if (day !== undefined) {
            data.day = day;
        }
        if (timeFrom !== undefined) {
            data.timeFrom = timeFrom;
        }
        if (timeTo !== undefined) {
            data.timeTo = timeTo;
        }
        return DBService.editEntity(id, data, Reception);
    }

    async removeReception(id) {
        return DBService.removeEntity(id, Reception);
    }
}

module.exports.receptionService = new ReceptionService();
