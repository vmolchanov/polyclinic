const {BaseController} = require('../../utils/router');
const {postService} = require('./post.service');

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
            res.json(post);
        });
    }

    async getAllPosts(req, res, next) {
        this.exec(req, next, async () => {
            const posts = await postService.getAllPosts();
            res.json(posts);
        });
    }

    async addPost(req, res, next) {
        this.exec(req, next, async () => {
            const post = await postService.addPost(req.body.title);
            res.json({type: 'success', data: post});
        });
    }

    async editPost(req, res, next) {
        this.exec(req, next, async () => {
            const post = await postService.editPost(req.body.id, req.body.title);
            res.json({type: 'success', data: post});
        });
    }

    async removePost(req, res, next) {
        this.exec(req, next, async () => {
            const post = await postService.removePost(req.body.id);
            res.json({status: 'success', data: post});
        });
    }
}

module.exports.postController = new PostController();
