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
  
module.exports = SignUp;
 