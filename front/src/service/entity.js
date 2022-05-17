import axios from '../config/axios';

class EntityService {
    static getEntity(entityName, id) {
        return axios
            .get(`/api/${entityName}/${id}`)
            .then(r => {
                return r.data;
            });
    }

    static getAllEntities(entityName) {
        return axios
            .get(`/api/${entityName}/`)
            .then(r => {
                return r.data;
            });
    }

    static addEntity(entityName, data) {
        return axios
            .post(`/api/${entityName}/`, data)
            .then(r => {
                return r.data;
            });
    }

    static editEntity(entityName, data) {
        return axios
            .put(`/api/${entityName}/`, data)
            .then(r => {
                return r.data;
            });
    }

    static removeEntity(id) {
        return axios
            .delete(`/api/${this.entityName}/`, {
                data: {id}
            })
            .then(r => {
                return r.data;
            });
    }
}

export default EntityService;
