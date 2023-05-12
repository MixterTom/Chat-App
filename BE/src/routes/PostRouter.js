import express from "express";

import PostController from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get('/read', PostController.readAll);

export default postRouter;