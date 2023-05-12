import Account from "../models/AccountModel.js";

const accounts = new Account("chat-app", "enrollcode");

class LoginController {
  async checkAuth(req, res) {
      const { username, enroll } = req.body;
      const fixedEnroll = "SD2023";

      if (username === "valid_username" && enroll === fixedEnroll) {
        res.json({ message: "Login successful!", status: true });
      } else {
        res.json({ message: "Invalid username or password", status: false });
      }
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
  }

  // Save code
  async create(req, res) {
    const data = req.body;
    await accounts.save(data);
  }
}

export default new LoginController();
