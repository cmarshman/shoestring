// var bcrypt = require("bcryptjs");
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
 
// const loginSchema = new Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   phone: { type: String, required: true },
//   email: {type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
//   password: {type: String, required: true, validate: [({ length }) => length >= 8, "Password should be  8 longer."]},
//   checked: {type: Boolean, required: true, default: false},
//   date: { type: Date, default: Date.now }
// });

// const User = mongoose.model("User", loginSchema);
  
// module.exports = SignUp;
// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
// User.prototype.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
// User.addHook("validate", function(user) {
//   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// });
// module.exports = User;
// //module.exports = SignUp;
// return User;
//};

var Mongoose = require('mongoose');
var Hash = require('password-hash');
var Schema = Mongoose.Schema;

var UserSchema = new Schema({
	email: { type: String },
	password: { type: String, set: function(newValue) {
		return Hash.isHashed(newValue) ? newValue : Hash.generate(newValue);
	} },

	// ... add any other properties you want to save with users ...
});

UserSchema.statics.authenticate = function(email, password, callback) {
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
