const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/register");
const loginRoutes = require('./api/login_route')

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require('../controllers/middleware/isAuthenticated')


// API Routes
router.use("/api", apiRoutes);
//router.use("/api", loginRoutes);

 // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // router.use("/home", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../client/build/index.html"));
  // });


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
