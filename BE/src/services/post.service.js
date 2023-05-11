import PostModel from "../models/post.model.js";

const posts = new PostModel('chat-app','posts');

class PostService {
    async readAll() {
        return await posts.get();
    };
    async readById(postId) {
        return await posts.getById(postId);
    }
    async save(post) {
        await posts.save(post);
    }
    async update(post) {
        await posts.update(post);
    }
};

export default new PostService();