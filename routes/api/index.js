const router = require("express").Router();
const signupRoutes = require("./register");
const loginRoutes = require("./login_route");

// signup routes
router.use("/signup", signupRoutes);
router.use("/login", loginRoutes);

module.exports = router;



