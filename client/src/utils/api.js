import axios from "axios";
//import db from '../../../models'
//import db from  '../utils/loginAPI'

export default {
  // Gets all users
  getSignUpData: function() {
    return axios.get("/api/signup");
  },
  // Gets a user with the given id
  getLoginData: function(id) {
    return axios.get("/api/signup/" + id);
  },

  getLoginInfo: function(logdata) {
    console.log("logdata", logdata)
    if(logdata.email=== "email" && logdata.password ==="password"){
      console.log("You are logged innnn!")
      //res.send({redirect: '/home'})
       
      
    }else{
      console.log("Login failed")
    }
    
    return axios.get("/api/login");
  },
  // 
  // Remove a  user with the given id
  deleteSignUpData: function(id) {
    return axios.delete("/api/signup/" + id);
  },
  // Saves a new user to the database
  saveSignUpData: function(signupData) {
    console.log("signUpdata", signupData)
    return axios.post("/api/signup", signupData);
    
  }
};
