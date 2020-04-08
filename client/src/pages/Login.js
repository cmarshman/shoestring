import React, { useState, useEffect } from "react";
import httpClient from '../httpClient';
import './design/login.css';
import Nav from '../components/navbar';
import '../pages/design/login.css';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';
import { useFormik , useFormikContext} from 'formik';
import Alert from '../components/Alert/alert'


const validationSchenma = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8),
     
});

//Function to handle the login form
const Login = (email, password ) => {

    const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchenma,
        onSubmit(values) {
                  
        }
    });
 
// //Function to handle submit
    function handleLoginOnsubmit(evt) {
        evt.preventDefault()
        const alluser = {...values}
		httpClient.logIn(alluser).then(user => {
            console.log("user", user )
            if(user){
                window.location.replace("/home") ;
                this.props.onLoginSuccess(user);
				this.props.history.push('/');
            }
             return
           }).catch(err => console.log('err', err));
             //clearForm();        
  }

 
 //Function to reset the form to empty fields
    const clearForm = () => {
       window.location.reload() 
        
    }
    //Render all  the form
     return (
        <>
        <Nav />
        <form onSubmit={handleLoginOnsubmit}>
            <div className='container tile is-4 is-parent box'>
                <div className="tile is-child">
                    <div className="field">
                        <label className="label">Email</label>
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email"
                                name="email"
                                values={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Email (required)"
                            />
                             {values.email.length < 10 &&  touched.email && 'errors' ? (
                              <p className="errormsg">Please enter a valid email</p>
                            ): ''}
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
                                //className = {values.password.length < 8 && touched.password? 'input errormsg' : 'input'}
                            />
                             {values.password.length < 8 &&  touched.password && 'errors' ?   (
                              <p className="errormsg">Please enter a valid password</p>
                            ): ''}
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
                               disabled={!values.email && !values.password  && 'errors'} 
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