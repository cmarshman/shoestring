import React from 'react';
import SignupForm from '../components/signupForm/signupForm';
import React, { useState, useEffect } from "react";
import API from "../utils/API";
 

function SignUp(){
// Setting our component's initial state
  //const [signupData, setSignupData]= useState([]),
  const [signupObject, setSignupObject] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email:"",
    password:""

  })

 // Load all user and store them with setSignupData
 useEffect(() => {
    handleInputChange();
    handleFormOnsubmit;
  }, []);

// Handles updating component state when the user types into the input field
function handleInputChange(event) {
    const { name, value } = event.target;
    setSignupObject({...signupObject, [name]: value})
  };


  //Handle the form subission- save it to the database on submit
function handleFormOnsubmit(event){
    event.preventdefault()
    if(signupObject && setSignupObject){
        API.saveSignUpData({
          firstName: signupObject.firstName,
          lastName: signupObject.author,
          phone: signupObject.phone,
          email: signupObject.email,
          password: signupObject.password
        })
          .then(() => setSignupObject({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          password: ""
          }))
           
      }
    };

    return (
        <>
        <SignupForm/>
        </>
    );

}
export default SignUp;