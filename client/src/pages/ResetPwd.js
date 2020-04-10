// //import React from 'react'
// import React, { useState, useEffect } from "react";
// import httpClient from '../httpClient'
// import $ from 'jquery';
// import Nav from '../components/navbar' 
// import '../pages/design/login.css'


//  const  ResetPwd =() =>{

//    const [loginObject, setLoginObject] = useState({
//        // _id: '',
//         email: "",
//         password: "",
//         image: ""
       
//     })

//  //function to Handle the  input field
//     function handleInputChange(event) {
//         const { name, value } = event.target;
//         setLoginObject({ ...loginObject, [name]: value })
//         console.log("input ", { name, value })
         
//     };

//     //Function to reset the form to empty fields
//     const clearForm = () => {
//         setLoginObject({
//             email: "",
//             password: "", 

//         })
//     }

import React, { useState, useEffect } from "react";
import httpClient from '../httpClient';
import './design/login.css';
import Nav from '../components/navbar';
import '../pages/design/login.css';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';
import { useFormik} from 'formik';
import $ from 'jquery'


//Setup  validation condition on the schema using Yup
const validationSchenma = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8),
    password: Yup.string().required().min(8),
    confirm_password: Yup
    .string()
    .required()
    .oneOf(
    [Yup.ref('password'), null],
     'Passwords must match',
   ),
});
     

//Function to handle the login form
const ResetPwd = () => {

const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
             
        },
        validationSchenma,
        onSubmit(values) {
        resetUser(values)        
        }
    });
 
    //Function 
    const resetUser = (evt) =>{
        const userEmail = values.email 
        httpClient.FindAllUser()   
        .then(serverResponse => {
          const data = serverResponse.data
          let findEmail=data.find(item =>item.email===userEmail)
            console.log("find", findEmail)
            if(findEmail === undefined){
                console.log("findEmail", findEmail)
                $('#errorMsg').attr("style", "color:red")
                $('#errorMsg').text("Email not found- try again or register.");
                return
            }
            //Insert the new password after update
            httpClient.InsertUpdate({
                _id:  findEmail._id,
                password: values.password 
            })
            .then(window.location.replace('/login'))
            .catch(err => console.log('err', err))
        })
    }

         
//Handle the form subission- save it to the database on submit
    return (
        <>
        <Nav/>
        <form onSubmit={handleSubmit}>
         <div className='container tile is-4 is-parent box'>
            <div className="tile is-child">
            <p className="reset"><em>Please Enter your Email to reset your password.</em></p>
            <br></br>
                <div className="field">
                <label className="label">Email</label>
                    <p className="control has-icons-left has-icons-right">
                        
                        <input className="input" type="email" placeholder="Email"
                            onChange={handleChange}
                            name="email"
                            placeholder="Email (required)"
                            value={values.email}
                            onBlur={handleBlur} />
                            <div id='errorMsg'  ></div>
                            {/* {values.email.length <4 &&  touched.email && 'errors' ? (
                              <p className="errormsg">Please enter a valid email</p>
                            ): ''} */}
                         <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                <label className="label">New Password</label>
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password"
                            onChange={handleChange}
                            name="password"
                            placeholder="Password (required)"
                            value={values.password}
                            onBlur={handleBlur}  />
                        {values.password.length < 8 &&  touched.password && 'errors' ? (
                              <p className="errormsg">Please enter a valid  password</p>
                            ): ''}     
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                
                <div className="field">
                <label className="label">Confirm Password</label>
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password"
                            onChange={handleChange}
                            name="confirm_password"
                            placeholder="Confirm Password (required)"
                            value={values.confirm_password} 
                            onBlur={handleBlur} />
                            {values.confirm_password !== values.password && touched.email && 'errors' ? (
                              <p className="errormsg">Passwords do not match</p>
                            ): ''}  
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>

                <div className="field">
                    <p className="control">
                        <button className="button is-success loginbtn"
                        disabled= {values.confirm_password !== values.password  && 'errors'} 
                            onClick={resetUser}>
                            Reset Password
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </form>
    </>
    )
}
export default ResetPwd;