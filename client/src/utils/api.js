import axios from "axios";
 

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
    return axios.post("/api/login");
     //return axios.get("/api/login");
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
    
  },

};
