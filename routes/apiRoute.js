const router = require("express").Router();
const signController = require("../controllers/signupController");

// Matches with "/api/signup"
router.route("/")
  .get(signController.findAll)
  .post(signController.create);

// Matches with "/api/signup/:id"
router
  .route("/:id")
  .get(signController.findById)
  .put(signController.update)
  .delete(signController.remove);

module.exports = router;
