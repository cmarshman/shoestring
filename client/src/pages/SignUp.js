import React, { useState, useEffect } from "react";
//import SignupForm from '../components/signupForm/signupForm';
import API from "../utils/api";
import Navbar from './../components/navbar';
import Alert from "../components/Alert/alert"
import './signup.css'

function SignUp(){

// Setting our component's initial state
const [signupObject, setSignupObject] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email:"",
    password:"",
    checked : false

  })

  //const isEnabled = signupObject.name.length > 0 && signupObject.checked === true;
 // Load all user and store them with setSignupData
//  useEffect(() => {
//     handleInputChange();
//     //handleFormOnsubmit;
//   }, []);


const [errorData, setErrorData]= useState({
  
  
        firstName: signupObject.firstName.length===0,
        lastName: signupObject.lastName.length===0,
        phone: signupObject.phone.length ===0,
        email: signupObject.email.length===0,
        password: signupObject.password.length ===0 ,
        checked: signupObject.checked.length=== 0

})


// Handles updating component state when the user types into the input field
function handleInputChange(event) {
    const { name, value } = event.target;
    setSignupObject({...signupObject, [name]: value})
    console.log("input ", { name, value } )
    errorValidation()
   };

  //Function to reset the form to empty fields
  const clearForm = () =>{
     setSignupObject({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      checked: false
    })   
  }

  const errorValidation =() => {
  
    setErrorData ({...errorData,
          firstName: signupObject.firstName.length === 0 ? true : false,
          lastName: signupObject.lastName.length === 0 ? true : false,
          phone: signupObject.phone.length === 0 ? true : false,
          email: signupObject.email.length=== 0? true : false,
          password: signupObject.password.length === 0 ? true : false,
          checked: signupObject.checked.length=== 0 ? true : false,
        })

    console.log("error", errorData);
    
  

  }



//Handle the form subission- save it to the database on submit
function handleFormOnsubmit(event){
    event.preventDefault();
    console.log(signupObject.firstName, signupObject.checked)
    if({...signupObject} !== 0){
        API.saveSignUpData({
          firstName: signupObject.firstName,
          lastName: signupObject.lastName,
          phone: signupObject.phone,
          email: signupObject.email,
          password: signupObject.password,
          checked: true
        })
        //.then(API.getSignUpData(function (res) ))
        //})
//})}
        .then (clearForm()) 
        .catch(err => console.log(err))
    }
        
 
};
    return (

        <div className='container'>
            <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                <input className="input error"  
                className = {signupObject.firstName === '' ? "input error" : " input" }
                type="text" 
                onChange={handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
                value={signupObject.firstName}
                  
                />
                     
            </div>
        </div>
      
            <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                <input className="input" type="text"
                className = {signupObject.lastName === "" ? "input error" : " input" }
                onChange={handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
                value={signupObject.lastName }
                />  
             </div>
        </div>
        <div className="field">
            <label className="label">Phone</label>
            <div className="control"> 
                <input className="input" type="text"
                className = {signupObject.phone === '' ? "input error" : " input" }
                onChange={handleInputChange}
                name="phone"
                placeholder="555-555-5555 (required)"
                value={signupObject.phone}
                /> 
                   
            </div>
        </div>
   
        <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input " type="email" 
                className = {signupObject.email === '' ? "input error" : " input" }
                    onChange={handleInputChange}
                    name="email"
                    placeholder="Email (required)"
                    value={signupObject.email}/>
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
            </div>
        </div>
            <div className="field">
                <label className="label">Password</label>
                   <p className="control has-icons-left">
                   <input className="input " type="password" 
                    className = {signupObject.password === '' ? "input error" : " input" }
                    onChange={handleInputChange}
                    name="password"
                    placeholder="Password (required)"
                    value={signupObject.password}/>   
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div className="field">
               <div className="control">
                 <label className="checkbox">
                    <input type="checkbox"
                    className = {signupObject.checked === ' ' ? "error" : " " }
                    onChange={handleInputChange}
                    name="checked"
                    value={signupObject.checked}
                    />
                      I agree to the <a href="#"> terms and conditions</a>
                </label>
              </div>
            </div>

              <div className="field is-grouped">
                 <div className="control">
                    <button className="button is-link loginbtn" onClick={handleFormOnsubmit}>Submit</button>
                  </div>
               <div className="control">
                  <button className="button is-link is-light" onClick = {clearForm}>Cancel</button>
               </div>
            </div>
      </div>
    )
  
}
export default SignUp;