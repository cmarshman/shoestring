const router = require("express").Router();
const signupController = require("../../controllers/signupController");
const passport = require('../../controllers/passport')

// Matches with "/api/books"
router.route("/")
  .get(signupController.findAll)
  //.get(signupController.findOne)
  //.post(signupController.findOne)
  //router.route("/signup")
  .post(signupController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(signupController.findById)
  .put(signupController.update)
  .delete(signupController.remove);


  // router
  // .route('/login')
  // .post( passport.authenticate('local', {
  //   successRedirect: '/home',
  //   failureRedirect: '/login',
  //   failureFlash: true
  // }));

module.exports = router;
