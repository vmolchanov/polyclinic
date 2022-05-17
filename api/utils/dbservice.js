const {ApiError} = require('../errors/api');

class DBService {
    static async getEntityById(id, Model) {
        return Model.findById(id);
    }

    static async getEntities(Model) {
        return Model.find();
    }

    static async addEntity(data, Model, uniqueFields = []) {
        for (let i = 0; i < uniqueFields.length; i++) {
            const field = uniqueFields[i];
            const candidate = await Model.findOne({
                [field]: data[field]
            });
            if (candidate !== null) {
                throw ApiError.Conflict('Duplicated');
            }
        }
        const entity = new Model(data);
        await entity.save();
        return data;
    }

    static async editEntity(id, data, Model) {
        const entity = await Model.findById(id);
        if (entity === null) {
            throw ApiError.BadRequest('Post not found');
        }
        for (let prop in data) {
            entity[prop] = data[prop];
        }
        await entity.save();
        return data;
    }

    static async removeEntity(id, Model) {
        await Model.findByIdAndDelete(id);
        return id;
    }
}

module.exports.DBService = DBService;
