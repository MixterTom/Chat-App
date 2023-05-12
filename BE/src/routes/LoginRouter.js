import express from "express";
import LoginController from "../controllers/LoginController.js";
const loginRouter = express.Router();

loginRouter.get("/login", LoginController.checkAuth);
loginRouter.get("/auth", LoginController.authUser);
loginRouter.get("/save",LoginController.create);

export default loginRouter;