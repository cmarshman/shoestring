const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  
});

const signUp = mongoose.model("Signup", signupSchema);

module.exports = signUp;
