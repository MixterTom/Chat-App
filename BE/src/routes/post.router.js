import express from "express";

import postController from "../controllers/post.controller.js";

const postRouter = express.Router();

postRouter.get('/read', postController.readAll);
postRouter.post('/create', postController.create);

export default postRouter;