const {PostDto} = require('@c/post/post.dto');
const {Post} = require('./post.model');
const {DBService} = require('../../utils/dbservice');

class PostService {
    async getPost(id) {
        return new PostDto(await DBService.getEntityById(id, Post));
    }

    async getAllPosts() {
        const posts = await DBService.getEntities(Post);
        return posts.map(post => new PostDto(post));
    }

    async addPost(title) {
        return new PostDto(
          await DBService.addEntity({title}, Post, ['title'])
        );
    }

    async editPost(id, title) {
        return new PostDto(
          await DBService.editEntity(id, {title}, Post)
        );
    }

    async removePost(id) {
        return new PostDto(await DBService.removeEntity(id, Post));
    }
}

module.exports.postService = new PostService();
