import express from "express";

import postRouter from "./post.router.js";

const indexRouter = express();

indexRouter.use('/v1', postRouter);

export default indexRouter;