const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/shoestring"
);

const singnUpSeed = [
  {
    firstName: "JT",
    lastName: "Turner",
    phone: "7048789089",
    email: "jt.turner@gmail.com",
    password: "password1",
    checked:  true,

    date: new Date(Date.now())
  },

  {
    firstName: "Robert",
    lastName: "Javier",
    phone: "704-878-9089",
    email: "robert.javier@gmail.com",
    password: "password1",
    date: new Date(Date.now())
  },
  {
    firstName: "Cory",
    lastName: "Marshman",
    phone: "402-878-9989",
    email: "cory.marshman@gmail.com",
    password: "password1",
    date: new Date(Date.now())
  },
  {
    firstName: "Jose",
    lastName: "Diplome",
    phone: "404-878-9089",
    email: "jose.diplome@hotmail.com",
    password: "password1",
    date: new Date(Date.now())
  },
  {
    firstName: "Michelle",
    lastName: "Abraham",
    phone: "282-878-9089",
    email: "michelle.b@yahoo.com",
    password: "password1",
    date: new Date(Date.now())
  },
  {
    firstName: "Isabella",
    lastName: "Herandez",
    phone: "704-878-9089",
    email: "isabella.h@gmail.com",
    password: "password1",
    date: new Date(Date.now())
  },
  {
    firstName: "DeVante",
    lastName: "Bailey",
    phone: "704-879-7898",
    email: "devante.bailey@gmail.com",
    password: "password1",
    date: new Date(Date.now())
  },
  { 
    firstName: "Sile",
    lastName: "Kiman",
    phone: "980-878-9089",
    email: "sile.kiman@gmail.com",
    password: "password1",
    date: new Date(Date.now())
  },
  
];

db.SignUp
  .remove({})
  .then(() => db.SignUp.collection.insertMany(singnUpSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });