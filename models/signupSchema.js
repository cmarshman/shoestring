const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Hash = require('password-hash');
 

const signUpSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: {type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
  password: { type: String, set: function(newValue) {
		return Hash.isHashed(newValue) ? newValue : Hash.generate(newValue);
	} },
 // password: {type: String, required: true, validate: [({ length }) => length >= 8, "Password should be  8 longer."]},
  checked: {type: Boolean, required: true, default: false},
  date: { type: Date, default: Date.now }
});

const SignUp = mongoose.model("SignUp", signUpSchema);


signUpSchema.statics.authenticate = function(email, password, callback) {
	this.findOne({ email: email }, function(error, user) {
		if (user && Hash.verify(password, user.password)) {
			callback(null, user);
		} else if (user || !error) {
			// Email or password was invalid (no MongoDB error)
			error = new Error("Your email address or password is invalid. Please try again.");
			callback(error, null);
		} else {
			// Something bad happened with MongoDB. You shouldn't run into this often.
			callback(error, null);
		}
  });
}
  
module.exports = SignUp;