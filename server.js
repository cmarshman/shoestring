require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./controllers/passport");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
//app.use(passport.initialize());
//app.use(passport.session());



 if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
 }

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shoestring");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});