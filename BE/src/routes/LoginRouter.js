import express from "express";

import LoginController from "../controllers/LoginController.js";

const LoginRouter = express.Router();


LoginRouter.post('/auth', LoginController.checkAuth);

export default LoginRouter;