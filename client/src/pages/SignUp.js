import React, { components, useState, useEffect } from "react";
import API from "../utils/api";
import Navbar from './../components/navbar';
import Alert from "../components/Alert/alert"
import '../pages/design/signup.css'
import httpClient from '../httpClient'
import $ from 'jquery'

function SignUp() {

  // Setting our component's initial state
  const [signupObject, setSignupObject] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    checked: false

  })

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setSignupObject({ ...signupObject, [name]: value })
    console.log("input ", { name, value })
  };

  //Function to reset the form to empty fields
  const clearForm = () => {
    setSignupObject({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      checked: ""
    })
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function handleFormOnsubmit(evt) {
    evt.preventDefault()
    httpClient.signUp({
      firstName: signupObject.firstName,
      lastName: signupObject.lastName,
      phone: signupObject.phone,
      email: signupObject.email,
      password: signupObject.password,
      checked: true
    }).then(user => {
       console.log("user", user)
      if (user) {
        this.props.onSignUpSuccess(user)
				this.props.history.push('/')
        window.location.replace("/login")
      }
      return (<div><p className ="error">User Not found</p></div>)
    }).catch(handleLoginErr);
       clearForm()
  }

// render the Form
return (
  <>
    <Navbar />

    <div className='container box'>
      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input className="input"
            // className = {signupObject.firstName === '' ? "input error" : " input" }
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
            // className = {signupObject.lastName === "" ? "input error" : " input" }
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
            // className = {signupObject.phone === '' ? "input error" : " input" }
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
            // className = {signupObject.email === '' ? "input error" : " input" }
            onChange={handleInputChange}
            name="email"
            placeholder="Email (required)"
            value={signupObject.email} />
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
            // className = {signupObject.password === '' ? "input error" : " input" }
            onChange={handleInputChange}
            name="password"
            placeholder="Password (required)"
            value={signupObject.password} />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox"
              // className = {signupObject.checked === ' ' ? "error" : " " }
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
          <button className="button is-link is-light" onClick={clearForm}>Cancel</button>
        </div>
      </div>
    </div>
  </>
)
  
}
export default SignUp;