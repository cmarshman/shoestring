// import React from 'react';
// import Navbar from './../components/navbar';
// import LoginForm from '../components/loginForm/loginForm';


// function Login(){
//     return (
//         <>
//         <Navbar />
//         <LoginForm />
//         </>
//     );
// }

// export default Login;

import React, { useState, useEffect } from "react";
import API from "../utils/api";
//import DB from './../../../models'
import { Redirect } from 'react-router-dom';
import './login.css'
import Navbar from './../components/navbar';

function Login() {
   const [loginObject, setLoginObject] = useState({
        email: "",
        password: "",
    })

  // Load all user and store them with setSignupData
//  useEffect(() => {
//     handleInputChange();
//     //handleFormOnsubmit;
//   }, []);

    //
    function handleInputChange(event) {
        const { name, value } = event.target;
        setLoginObject({ ...loginObject, [name]: value })
        console.log("input ", { name, value })
        //errorValidation()
    };

    //Function to reset the form to empty fields
    const clearForm = () => {
        setLoginObject({
            email: "",
            password: "",

        })
    }

    //Handle the form subission- save it to the database on submit
    function handleLoginOnsubmit(event) {
        event.preventDefault();
        console.log(loginObject.email, loginObject.password)
         if ({...loginObject}) {
            API.getLoginInfo({    
                  email : loginObject.email,
                  password: loginObject.password,
                 
            })  
             .then(clearForm())
             .catch(err => console.log(err))
        }

    };

    return (
        <div>
            <Navbar/>
        <div className='container tile is-4 is-parent box'>
            <div className="tile is-child">
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email"
                            className={loginObject.email === '' ? "input error" : " input"}
                            onChange={handleInputChange}
                            name="email"
                            placeholder="Email (required)"
                            value={loginObject.email} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password"
                            className={loginObject.password === '' ? "input error" : " input"}
                            onChange={handleInputChange}
                            name="password"
                            placeholder="Password (required)"
                            value={loginObject.password} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-success loginbtn"
                            onClick={handleLoginOnsubmit}>
                            Login
                        </button>
                    </p>
                    <h5><a href="#">Forgot Password?</a></h5>
                </div>
            </div>
        </div>
        </div>

    )
}
export default Login;