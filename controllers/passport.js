var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// // Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
// passport.use(new LocalStrategy(
//   // Our user will sign in using an email, rather than a "username"
//   {
//     usernameFieldemail: "email"
//   },
//   function(email, password, done) {
//     // When a user tries to sign in this code runs
//     db.User.findOne({
//       email: email
//     }).then(function(dbUser) {
//       // If there's no user with the given email
//       if (!dbUser) {
//         return done(null, false, {
//           message: "Incorrect email."
//         });
//       }
//       // If there is a user with the given email, but the password the user gives us is incorrect
//       else if (!dbUser.validPassword(password)) {
//         return done(null, false, {
//           message: "Incorrect password."
//         });
//       }
//       // If none of the above, return the user
//       return done(null, dbUser);
//     });
//   }
// ));

// // In order to help keep authentication state across HTTP requests,
// // Mongoose needs to serialize and deserialize the user
// // Just consider this part boilerplate needed to make it all work
// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

// Exporting our configured passport
//module.exports = passport;
// ... set up & connect mongoose here ...

//var User = mongoose.model(UserSchema);

var passport = require('passport');
var PassportLocalStrategy = require('passport-local');
module.exports = function(app){

var authStrategy = new PassportLocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(email, password, done) {
	User.authenticate(email, password, function(error, user){
		// You can write any kind of message you'd like.
		// The message will be displayed on the next page the user visits.
		// We're currently not displaying any success message for logging in.
		done(error, user, error ? { message: error.message } : null);
	});
});

var authSerializer = function(user, done) {
	done(null, user.id);
};

var authDeserializer = function(id, done) {
	db.findById(id, function(error, user) {
		done(error, user);
	});
};

passport.use(authStrategy);
passport.serializeUser(authSerializer);
passport.deserializeUser(authDeserializer);

// ... continue with Express.js app initialization ...
app.use(require('connect-flash')()); // see the next section
app.use(passport.initialize());
}