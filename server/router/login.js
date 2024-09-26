const express = require("express");
const router = express.Router();
const { login } = require("../controller/loginController"); // Destructure to get the function

router.post("/login", login); // Use the function directly

module.exports = router;
