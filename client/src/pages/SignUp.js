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
    name: "",
    phone: "",
    city: "",
    state: "",
    email: "",
    password: "",
    friends: [],
    image: "",
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
      name: "",
      phone: "",
      city: "",
      state: "",
      email: "",
      password: "",
      checked: " "
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
      name: signupObject.name,
      phone: signupObject.phone,
      city: signupObject.city,
      state: signupObject.state,
      email: signupObject.email,
      password: signupObject.password,
      friends: signupObject.friends,
      image:  signupObject.image,
      checked: true
    }).then(user => {
      console.log("user", user)
      if (user) {
        window.location.replace("/login")
        this.props.onSignUpSuccess(user)
        this.props.history.push('/')
      }
      return (<div><p className="error">User Not found</p></div>)
    }).catch(handleLoginErr);
    clearForm()
  }

  // render the Form
  return (
    <>
      <Navbar />
      <div className="tile is-ancestor">
        <div className="tile is vertical is-7 box" id="tile">

          <div className="tile is-parent">
            <article className="tile is-child notification is-dark">

              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input"
                    // className = {signupObject.firstName === '' ? "input error" : " input" }
                    type="text"
                    onChange={handleInputChange}
                    name="name"
                    placeholder="Name (required)"
                    value={signupObject.name}
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
                <label className="label">City</label>
                <div className="control">
                  <input className="input" type="text"
                    // className = {signupObject.lastName === "" ? "input error" : " input" }
                    onChange={handleInputChange}
                    name="city"
                    placeholder="City (Not required)"
                    value={signupObject.city}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">State</label>
                <div className="control">
                  <input className="input" type="text"
                    // className = {signupObject.lastName === "" ? "input error" : " input" }
                    onChange={handleInputChange}
                    name="state"
                    placeholder="State (Not required)"
                    value={signupObject.state}
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
                    <input id="bluefish" type="checkbox"
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
                  <button className="button is-light" onClick={handleFormOnsubmit} id="twofish">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-light" onClick={clearForm} id="rainbowfish">Cancel</button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

    </>
  )

}
export default SignUp;