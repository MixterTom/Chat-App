import express from "express";
import router from "./post.router.js";

const indexRouter = express();
indexRouter.use('/chat', router);

export default indexRouter;