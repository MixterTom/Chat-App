import express from "express";

import messageRouter from "./message.router.js";
import postRouter from "./post.router.js";
import userRouter from "./user.router.js";
const indexRouter = express();

indexRouter.use("/v1", userRouter);
indexRouter.use('/v1', messageRouter);
indexRouter.use('/v1', postRouter);

export default indexRouter;