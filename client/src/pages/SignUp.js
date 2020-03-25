import React, { useState, useEffect } from "react";
//import SignupForm from '../components/signupForm/signupForm';
import API from "../utils/api";
import Navbar from './../components/navbar';

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
//  useEffect(() => {
//     handleInputChange();
//     //handleFormOnsubmit;
//   }, []);

// Handles updating component state when the user types into the input field
function handleInputChange(event) {
    const { name, value } = event.target;
    setSignupObject({...signupObject, [name]: value})
    console.log("input ", { name, value } )
  };


  //Handle the form subission- save it to the database on submit
function handleFormOnsubmit(event){
    event.preventDefault();
    console.log(signupObject.firstName)
    if({...signupObject} !==""){
        API.saveSignUpData({
          firstName: signupObject.firstName,
          lastName: signupObject.lastName,
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
      else{
        
      }
    };

    return (

        <div className='container'>
            <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                <input className="input" type="text"
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
                onChange={handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
                value={signupObject.lastName}
                />              
            </div>
        </div>
        <div className="field">
            <label className="label">Phone</label>
            <div className="control"> 
                <input className="input" type="text"
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
                    <p className="help ">This email is invalid</p>
        </div>
            <div className="field">
                <label className="label">Password</label>
                   <p className="control has-icons-left">
                   <input className="input " type="password" 
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
                    <input type="checkbox" />
                      I agree to the <a href="#"> terms and conditions</a>
                 </label>
                     </div>
            </div>

            

              <div className="field is-grouped">
                 <div className="control">
                    <button className="button is-link loginbtn" onClick={handleFormOnsubmit}>Submit</button>
                  </div>
               <div className="control">
                  <button className="button is-link is-light">Cancel</button>
               </div>
            </div>
      </div>
   
    )
//}//

}
export default SignUp;