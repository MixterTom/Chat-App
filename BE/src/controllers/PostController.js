import PostModel from "../models/PostModel.js";

const posts = new PostModel('chat-app','posts');

class PostController {
    async readAll(req,res) {
        const data = await posts.get();
        res.status(200).json(data);
    };
    async create(data) {
        await posts.save(data);
    };
};

export default new PostController();