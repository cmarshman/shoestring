import React, { useState, useEffect } from "react";

import httpClient from '../httpClient'

import './design/login.css'

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

    const validate = (user) =>{
       
        return(
            <div> <p className = {!user ? "input error" : " input"}>
            </p>
            </div>
          )
    }

	//Function to handle submit
    function handleLoginOnsubmit(evt) {
        evt.preventDefault()
        const alluser = {...loginObject}
		httpClient.logIn(alluser).then(user => {
            console.log("user", user )
			if(user) {
                window.location.replace("/home") 
                this.props.onLoginSuccess(user)
				this.props.history.push('/')
            }
             validate(user)
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
                <label className="label">Email</label>
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email"
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
                <label className="label">Password</label>
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password"
                         
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
                        <button 
                            id="honey"
                            className="button is-light"
                            onClick={handleLoginOnsubmit}>
                            Login
                        </button>
                    </p>
                    <h5><a href="/reset">Forgot Password?</a></h5>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;