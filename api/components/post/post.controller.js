const {BaseController} = require('../../utils/router');
const {postService} = require('./post.service');
const {PostDto} = require('./post.dto');

class PostController extends BaseController {
    constructor() {
        super();

        this.getPost = this.getPost.bind(this);
        this.getAllPosts = this.getAllPosts.bind(this);
        this.addPost = this.addPost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.removePost = this.removePost.bind(this);
    }

    async getPost(req, res, next) {
        this.exec(req, next, async () => {
            const post = await postService.getPost(req.params.id);
            const dto = new PostDto(post);
            res.json(dto);
        });
    }

    async getAllPosts(req, res, next) {
        this.exec(req, next, async () => {
            const posts = await postService.getAllPosts();
            const dtos = posts.map(post => new PostDto(post));
            res.json(dtos);
        });
    }

    async addPost(req, res, next) {
        this.exec(req, next, async () => {
            const post = await postService.addPost(req.body.title);
            const dto = new PostDto(post);
            res.json({type: 'success', data: dto});
        });
    }

    async editPost(req, res, next) {
        this.exec(req, next, async () => {
            const post = await postService.editPost(req.body.id, req.body.title);
            const dto = new PostDto(post);
            res.json({type: 'success', data: dto});
        });
    }

    async removePost(req, res, next) {
        this.exec(req, next, async () => {
            const post = await postService.removePost(req.body.id);
            const dto = new PostDto(post);
            res.json({status: 'success', data: dto});
        });
    }
}

module.exports.postController = new PostController();
