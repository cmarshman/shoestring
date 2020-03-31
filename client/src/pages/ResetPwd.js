//import React from 'react'
import React, { useState, useEffect } from "react";
import httpClient from '../httpClient'
import $ from 'jquery';
import Nav from '../components/navbar' 
import '../pages/design/login.css'

function ResetPwd() {

   const [loginObject, setLoginObject] = useState({
        email: "", 
       
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
    function handleResetOnsubmit(evt) {
        evt.preventDefault()
             $.ajax({
                url: 'http://data.fixer.io/api/latest/6f19055bbe0aa8fb8296333561932d16',
                method: 'get',
                data: { 
                 type: JSON
                },
                success: (response) => {
                  console.log('response:', response);
                },
                error: (err) => {
                  console.log(err);
                } 
            })
     
    }

    //Handle the form subission- save it to the database on submit
    return (
        <>
        <Nav/>
         <div className='container tile is-4 is-parent box'>
       
            <div className="tile is-child">
            <p className="reset"><em>Please Enter your Email to receive a reset password Link.</em></p>
            <br></br>
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
                    <p className="control">
                        <button className="button is-success loginbtn"
                            onClick={handleResetOnsubmit}>
                            Reset Password
                        </button>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default ResetPwd;