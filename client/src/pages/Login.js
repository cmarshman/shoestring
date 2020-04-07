import React, { useState, useEffect } from "react";
import httpClient from '../httpClient';
import './design/login.css';
import Nav from '../components/navbar';
import '../pages/design/login.css';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';
import { useFormik , useFormikContext} from 'formik';


const validationSchenma = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
});


const Login = (email, password ) => {

    const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        //validate(),
        onSubmit(values) {
            console.log("values", values)
            //handleLoginOnsubmit();
             
        }
    });


    useEffect(() => {
    //validate();
         
         
    }, [])


// //Function to handle submit
    function handleLoginOnsubmit(evt) {
        evt.preventDefault()
        const alluser = {...values}
		httpClient.logIn(alluser).then(user => {
            console.log("user", user )
			if(user) {
                window.location.replace("/home") 
                this.props.onLoginSuccess(user)
				this.props.history.push('/')
            }
             //validate(user)
          }).catch(err => console.log('err', err));
             //clearForm();
             
     
}

 //Function to reset the form to empty fields
    const clearForm = values => {
         return(
            values.email= "",
            values.password= ""
         )
    }

//console.log("error",  errors)

   const validate = values =>{
        let errors = {}
        const passwordRegex = /(?=,*[0-9])/;
        if (!values.email){
            errors.email ="Required"
             
          }else if(!EmailValidator.validate(email)){
             errors.email = "Invalid Email"
         }

         if(!values.password){
             errors.password = "Required";
             
         }
         else if(values.password < 8){
             errors.password = "Password must be 8 characters long";  
         }
         else if(!passwordRegex.text(password)){
             errors.password = "Invalid password. Must contain at least 1 number"
         }
         console.log("log1", errors)

       return errors;
     }

    //console.log("log", errors.email)
    return (
        <>
            <Nav />
                    <form onSubmit={handleSubmit} >
            <div className='container tile is-4 is-parent box'>
                <div className="tile is-child">
                    <div className="field">
                        <label className="label">Email</label>
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email"
                             //className={errors.email?"input error" : "input"}
                                name="email"
                                values={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Email (required)"
                            />
                             {values.email.length < 8 &&  touched.email && 'errors' ?   (
                              <p className="errormsg">Please enter a valid email</p>
                            ): ''}


                             {/* {errors.email ? errors.email : ''} */}
                            {/* //  (
                            //     <div className="errors "> Please Enter a valid email</div>
                            //   )
                            //   :
                            //   ''
                            //  } */}
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password"
                                values={password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="password"
                                placeholder="Password (required)"
                                className = {password && touched.password? 'input errors' : 'input'}
                            />
                             {values.password.length < 8 &&  touched.password && 'errors' ?   (
                              <p className="errormsg">Please enter a valid password</p>
                            ): ''}
{/* 
                             className = password && touched.password && (
                               <div className="input errormsg">{errors.password}</div>
                             )} */}
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button type="submit"
                                id="honey"
                                className="button is-light"
                                //disabled={isSubmitting}
                               onClick={handleLoginOnsubmit}
                                >
                                Login
                                </button>
                        </p>
                        <h5><a href="/reset">Forgot Password?</a></h5>
                    </div>
                </div>
            </div>
            </form>
        </>
    )

} 
export default Login;