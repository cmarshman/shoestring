var bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signUpSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: {type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
  password: {type: String, required: true, validate: [({ length }) => length >= 8, "Password should be  8 longer."]},
  checked: {type: Boolean, required: true, default: false},
  date: { type: Date, default: Date.now }
});

const SignUp = mongoose.model("SignUp", signUpSchema);
 // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
//  SignUp.prototype.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };
// // Hooks are automatic methods that run during various phases of the User Model lifecycle
// // In this case, before a User is created, we will automatically hash their password
// SignUp.addHook("beforeCreate", function(user) {
//   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//});


module.exports = SignUp;
//return SignUp;