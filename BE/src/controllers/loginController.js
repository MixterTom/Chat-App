import asyncHandler from "express-async-handler";
import User from "../models/account.model.js";
const checkAuth = asyncHandler(async (req, res) => {
  const { username, enrollmentCode } = req.body;

  // Check if enrollment code is correct
  const fixedEnrollmentCode = "SD-2023"; // Fixed enrollment code
  if (enrollmentCode !== fixedEnrollmentCode) {
    return res.status(401).json({ error: " Something wrong with enrolling code! " });
  }

  // Add user object to request object for use in downstream middleware/routes
  const user = { username };
  req.username = user;

  // Call next middleware or route
  next();
  const authUser = asyncHandler(async (req, res) => {
    const { username, enrollmentCode } = req.body;

    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(enrollmentCode))) {
      res.json({
        name: user.name,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Username or EnrollmentCode");
    }
    next();
    authUser();
  });
  
});



export default checkAuth;
