import express from "express";

import PostRouter from "./PostRouter.js";

import LoginRouter from "./LoginRouter.js"

const indexRouter = express();

indexRouter.use('/v1', LoginRouter);

indexRouter.use('/v1', PostRouter);

export default indexRouter;