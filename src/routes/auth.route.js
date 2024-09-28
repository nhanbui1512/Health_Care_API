const express = require("express");

const {
  signup,
  login,
  logout,
  getProfile,
  changePassword,
} = require("../app/controllers/auth.controller");
const { authMiddleWare } = require("../app/middlewares/auth.middleware");
const { changePassValidation } = require("../validations/auth.validation");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from auth route");
});

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", authMiddleWare, getProfile);
router.put("/password", changePassValidation, authMiddleWare, changePassword);

// router.get("/authCheck", protectRoute, authCheck);

module.exports = router;
