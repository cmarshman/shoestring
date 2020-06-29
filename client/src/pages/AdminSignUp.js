import React from "react";
import Navbar from '../components/navbar';
import '../pages/design/signup.css'
import httpAdmin from '../httpAdmin'
import $ from 'jquery'
import * as Yup from 'yup';
import { useFormik } from 'formik';
 


//Setup  validation condition on the schema using Yup
const validationSchenma = Yup.object({
  name: Yup.string().email().required(),
  phone: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
  checked: Yup.boolean().required(),
     
});


let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let emailVal = /.+@.+\..+/;
 
//Function to handle  admin sign-up
function AdminSignUp(admin) {

  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      city: "",
      state: "",
      email: "",
      password: "",
      image: "",
      checked: false,
    },
    validationSchenma,
    // Handles updating component state when the admin types into the input field
    onSubmit(values) {
      handleFormOnsubmit(values)
    }
});
   
  //Function to reset the form to empty fields
  const clearForm = () => {
      window.location.reload()
  }
   
  // Does a post to the signup route. If successful, we are redirected to the login page
  // Otherwise we log   errors
  function handleFormOnsubmit(evt) {
    evt.preventDefault()
    httpAdmin.signUp({
      name: values.name,
      phone: values.phone,
      city: values.city,
      state: values.state,
      email: values.email,
      password: values.password,
      image:  values.image,
      checked: values.checked
    }).then(admin => {
      console.log("admin", admin)
      if (admin) {
        window.location.replace("/admin-12152011")
        this.props.onSignUpSuccess(admin)
        this.props.history.push('/')
      }
      $('#errorMsg').attr("style", "color:red")
      $('#errorMsg').text("An error occured please review your entries");
      return
    }).catch(err => console.log('err', err));
    
  }

  // render the Form and handle validations
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
      <div id='errorMsg'  ></div>
      <div className="tile is-ancestor">
        <div className="tile is vertical is-7 box" id="tile">

          <div className="tile is-parent">
            <article className="tile is-child notification is-dark">

              <div className="field">
                <label className="label">Name</label>
                <div className="control has-icons-left">
                  <input className="input"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    placeholder="Name (required)"
                    value={values.name}
                  />
                  {values.name.length < 1 && touched.name && 'errors' ? (
                    <p className="errMsg">Please enter your name</p>
                            ): ''} 
                    <span className="icon is-small is-left">
                        <i className="fas fa-user-astronaut"></i>
                    </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input className="input " type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    placeholder="Email (required)"
                    value={values.email} />
                    {!values.email.match(emailVal) &&  touched.email && 'errors' ? (
                        <p className="errMsg">Please enter a valid Email</p>
                      ): ''}
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input className="input " type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    placeholder="Password (required)"
                    value={values.password} />
                    {values.password.length <8 &&  touched.password && 'errors' ? (
                      <p className="errMsg">Please enter a valid Password</p>
                     ): ''}
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>
              
              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input id="bluefish" type="checkbox"
                       onChange={handleChange}
                      onBlur={handleBlur}
                      name="checked"
                      value={values.checked}
                    />I agree to the <a href="#"> terms and conditions</a>

                    {values.checked !== true &&  'errors' ? (
                  <div><p className="errMsg">Please check the box to enable the submit button </p></div>
                  ): ''} 
                    
                   
                  </label>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-light" 
                  onClick={handleFormOnsubmit} 
                  disabled={!values.checked && 'errors'}
                  disabled={!values.phone.match(phoneno)}
                  disabled={!values.email.match(emailVal)}
                  id="twofish"
                  >Submit</button>
                </div>
                <div className="control">
                  <button className="button is-light" 
                  onClick={clearForm} id="rainbowfish">Cancel</button>
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
export default AdminSignUp;
