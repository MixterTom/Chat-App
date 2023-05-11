import express from "express";
const router = express.Router();
import checkAuth from "../controllers/loginController.js";
import User from "../models/account.model.js";


router.post("/login", checkAuth);
router.post("/", async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUsername = await newUser.save();
    res.status(200).json(savedUsername);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
