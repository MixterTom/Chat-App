import postService from "../services/post.service.js";

class postController {
    async readAll(req,res) {
        const data = await postService.readAll();
        res.status(200).json(data);
    };
    async read(req,res) {
        const { id } = req.params;
        const data = await postService.readById(id);
        res.status(200).json(data);
    };
    async create(req,res) {
        const data = req.body;
        console.log(data);
        await postService.save(data);
        res.status(200).json({
            msg: "success"
        });
    };
    async update(req,res) {
        const data  = req.body;
        await postService.update(data);
        res.status(200).json({
            msg: "success"
        });
    };
};

export default new postController();