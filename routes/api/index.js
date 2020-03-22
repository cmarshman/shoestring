const router = require("express").Router();
const signupRoutes = require("./register");

// signup routes
router.use("/signup", signupRoutes);

module.exports = router;



