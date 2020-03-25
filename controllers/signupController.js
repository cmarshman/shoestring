const db = require("../models");
//var passport = require("../config/passport");

// Defining methods for the signUpController
module.exports = {
  findAll: function(req, res) {
    console.log('finding all...', req.query)
    db.SignUp
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      //console.log("from findall", res.json())
  },
  findOne: function(req, res) {
    console.log("searching for:", req.body);
    db.SignUp.findOne({ email: req.body.email })
    .then(function(dbUser) {
      if (!dbUser) {
        res.json('User not found!');
      } else {
        res.json(dbUser)
      }
    })
    .catch(err => res.status(422).json(err));
   },

  findById: function(req, res) {
    db.SignUp
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      console.log("result id", req.params.id)
  },
  create: function(req, res) {
    db.SignUp
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      console.log("from controller", req.body)
  },
  update: function(req, res) {
    db.SignUp
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.SignUp
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
