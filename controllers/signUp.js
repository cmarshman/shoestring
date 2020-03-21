const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signUpSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: number, required: true },
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

const SignUp = mongoose.model("Book", signUpSchema);

module.exports = SignUp;