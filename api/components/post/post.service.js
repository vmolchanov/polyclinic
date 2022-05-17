const {Post} = require('./post.model');
const {DBService} = require('../../utils/dbservice');

class PostService {
    async getPost(id) {
        return DBService.getEntityById(id, Post);
    }

    async getAllPosts() {
        return DBService.getEntities(Post);
    }

    async addPost(title) {
        return DBService.addEntity({title}, Post, ['title']);
    }

    async editPost(id, title) {
        return DBService.editEntity(id, {title}, Post);
    }

    async removePost(id) {
        return DBService.removeEntity(id, Post);
    }
}

module.exports.postService = new PostService();
