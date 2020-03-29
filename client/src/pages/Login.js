//import React from 'react'
import React, { useState, useEffect } from "react";
import httpClient from '../httpClient'
import $ from 'jquery';
import Nav from '../components/navbar'
import '../pages/design/login.css'

function Login() {

   const [loginObject, setLoginObject] = useState({
        email: "",
        password: "",
    })

 //function to Handle the  input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setLoginObject({ ...loginObject, [name]: value })
        console.log("input ", { name, value })
         
    };

    //Function to reset the form to empty fields
    const clearForm = () => {
        setLoginObject({
            email: "",
            password: "",

        })
    }

    const validate = (err) =>{
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

	//Function to handle submit
    function handleLoginOnsubmit(evt) {
        evt.preventDefault()
        console.log(loginObject.email, loginObject.password)
        const alluser = {...loginObject}
		httpClient.logIn(alluser).then(user => {
            console.log("user", user )
			if(user) {
				window.location.history.push('/')
			}
        }).catch(validate);
           clearForm();

     
    }
    //Handle the form subission- save it to the database on submit

    return (
        <>
        <Nav/>
       
        <div className='container tile is-4 is-parent box'>
            <div className="tile is-child">
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email"
                            // className={loginObject.email === '' ? "input error" : " input"}
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
                            // className={loginObject.password === '' ? "input error" : " input"}
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
                            {/* onClick={() => window.location.reload()> */}
                            Login
                        </button>
                    </p>
                    <h5><a href="#">Forgot Password?</a></h5>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;