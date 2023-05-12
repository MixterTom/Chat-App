import Account from "../models/AccountModel.js";

const user = new Account("chat-app", "enrollcode");

class LoginController {
  async checkAuth(req, res, next) {
      const { username, enroll } = req.body;
      const fixedEnroll = "SD2023";

      if (username === "valid_username" && enroll === fixedEnroll) {
        res.json({ message: "Login successful!", status: true });
      } else {
        res.json({ message: "Invalid username or password", status: false });
      }
    next();
  }

  async authUser(req, res) {
    const { username, enrollmentCode } = req.body;

    const user = await user.findOne({ username });

    if (user && (await user.matchPassword(enrollmentCode))) {
      res.json({
        name: user.name,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Username or EnrollmentCode");
    }
    next();
  }

  // Save code
  async create(data) {
    const newUser = new user(req.body);
    try {
      const savedUsername = await newUser.save(data);
      res.status(200).json(savedUsername);
    } catch (err) {
      res.status(500).json(err);
    }
    next();
  }
}

export default new LoginController();
