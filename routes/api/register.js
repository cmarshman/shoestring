const router = require("express").Router();
const signupController = require("../../controllers/signupController");

// Matches with "/api/books"
router.route("/")
  .get(signupController.findAll)
  .get(signupController.findOne)
  .post(signupController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(signupController.findById)
  .put(signupController.update)
  .delete(signupController.remove);

module.exports = router;
