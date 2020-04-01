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

  getLoginInfo: function(logindata) {
    console.log("logindata", logindata)
     return axios.post("/api/login");
   },
 
  // Remove a  user with the given id
  deleteSignUpData: function(id) {
    return axios.delete("/api/signup/" + id);
  },
  // Saves a new user to the database
  saveSignUpData: function(signupData) {
    console.log("signUpdata", signupData)
    return axios.post("/api/signup", signupData);
    
  },
  // Exchange Rate Api
  // endpoint = 'convert',
  // access_key = 'API_KEY',
  // from = '',
  // to = '',
  // amount = '',

  // latestApi: function() {
  //   return axios.get('http://data.fixer.io/api/latest/6f19055bbe0aa8fb8296333561932d16');
   
  // },

  // exchangeApi: function() {
  //   return axios.get('http://data.fixer.io/api/covert/?access_key=6f19055bbe0aa8fb8296333561932d16'+'&from=' + from + '&to=' + to + '&amount=' + amount,)

  // }
  
};