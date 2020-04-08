import React, { components, useState, useEffect } from "react";
import Navbar from './../components/navbar';
import Alert from "../components/Alert/alert"
import '../pages/design/signup.css'
import httpClient from '../httpClient'
import $ from 'jquery'
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';
import { useFormik , useFormikContext} from 'formik';
 

const validationSchenma = Yup.object({
  name: Yup.string().email().required(),
  phone: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
     
});

//Function to handle the login form
// const Login = (email, password ) => {

//     const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
//         initialValues: {
//             email: '',
//             password: ''
//         },
//         validationSchenma,
//         onSubmit(values) {
                  
//         }
//     });
 

function SignUp() {

  // Setting our component's initial state
  // const [signupObject, setSignupObject] = useState({
  //   name: "",
  //   phone: "",
  //   city: "",
  //   state: "",
  //   email: "",
  //   password: "",
  //   friends: '',
  //   image: "",
  //   checked: false,
    

  // })

  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      city: "",
      state: "",
      email: "",
      password: "",
      friends: '',
      image: "",
      checked: '',
    },
    validationSchenma,
    onSubmit(values) {
              
    }
});
  // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setSignupObject({ ...signupObject, [name]: value })
  //   console.log("input ", { name, value })
  // };

  //Function to reset the form to empty fields
  const clearForm = () => {
      window.location.reload()
  }
  // function handleLoginErr(err) {
  //   $("#alert .msg").text(err.responseJSON);
  //   $("#alert").fadeIn(500);
  // }

  // Does a post to the signup route. If successful, we are redirected to the login page
  // Otherwise we log   errors
  function handleFormOnsubmit(evt) {
    evt.preventDefault()
    httpClient.signUp({
      name: values.name,
      phone: values.phone,
      city: values.city,
      state: values.state,
      email: values.email,
      password: values.password,
      friends: values.friends,
      image:  values.image,
      checked: values.checked
    }).then(user => {
      console.log("user", user)
      if (user) {
        window.location.replace("/login")
        this.props.onSignUpSuccess(user)
        this.props.history.push('/')
      }
      return (<div><p className="error">User Not found</p></div>)
    }).catch(err => console.log('err', err));
   // clearForm()
  }

  // render the Form
  return (
    <>
      <Navbar />
      <form onSubmit={handleFormOnsubmit}>
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    placeholder="Name (required)"
                    value={values.name}
                  />
                  {values.name.length <1 && touched.name && 'errors' ? (
                    <p className="errormsg">Please enter your name</p>
                            ): ''}
                </div>
              </div>

             
              <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                  <input className="input" type="text"
                    // className = {signupObject.phone === '' ? "input error" : " input" }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="phone"
                    placeholder="555-555-5555 (required)"
                    value={values.phone}
                  />
                  {values.phone.length < 10 &&  touched.phone && 'errors' ? (
                              <p className="errormsg">Please enter a valid Phone</p>
                            ): ''}
                </div>
              </div>
              <div className="field">
                <label className="label">City</label>
                <div className="control">
                  <input className="input" type="text"
                    // className = {signupObject.lastName === "" ? "input error" : " input" }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="city"
                    placeholder="City (Not required)"
                    value={values.city}
                  />
                   {values.city.length < 10 &&  touched.city && 'errors' ? (
                        <p className="errormsg">Please enter a valid City</p>
                    ): ''}
                </div>
              </div>
              <div className="field">
                <label className="label">State</label>
                <div className="control">
                  <input className="input" type="text"
                    // className = {signupObject.lastName === "" ? "input error" : " input" }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="state"
                    placeholder="State (Not required)"
                    value={values.state}
                  />
                   {values.state.length < 2 &&  touched.state && 'errors' ? (
                    <p className="errormsg">Please enter a valid State</p>
                    ): ''}
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input className="input " type="email"
                    // className = {signupObject.email === '' ? "input error" : " input" }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    placeholder="Email (required)"
                    value={values.email} />
                     {values.email.length < 10 &&  touched.email && 'errors' ? (
                        <p className="errormsg">Please enter a valid Email</p>
                      ): ''}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    placeholder="Password (required)"
                    value={values.password} />
                    {values.password.length < 10 &&  touched.password && 'errors' ? (
                      <p className="errormsg">Please enter a valid Password</p>
                     ): ''}
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              
              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input id="bluefish" type="checkbox"
                      className = {values.checked === ' ' ? "errormsg" : " " }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="checked"
                      value={values.checked}
                    />{values.checked.length <1 &&  touched.checked && 'errors' ? (
                  <p className="errormsg">Please check the box </p>
                  ): ''} 
                    I agree to the <a href="#"> terms and conditions</a>
                   
                  </label>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-light" 
                  //onClick={handleFormOnsubmit} 
                  disabled={!values.checked && 'errors'}

                  id="twofish"
                  >Submit</button>
                </div>
                <div className="control">
                  <button className="button is-light" onClick={clearForm} id="rainbowfish">Cancel</button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </form>
    </>
  )

}
export default SignUp;