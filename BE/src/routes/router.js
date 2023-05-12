import express from "express";

import PostRouter from "./PostRouter.js";

const indexRouter = express();

indexRouter.use('/v1', PostRouter);

export default indexRouter;