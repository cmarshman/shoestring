//import React from 'react'
import React, { useState, useEffect } from "react";
import httpClient from '../httpClient'
import $ from 'jquery';
import Nav from '../components/navbar' 
import '../pages/design/login.css'
//  CLT = require ('../../../controllers')
function ResetPwd() {

   const [loginObject, setLoginObject] = useState({
       // _id: '',
        email: "",
        password: "",
        image: ""
       
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
   function handleResetOnsubmit(evt) {
        evt.preventDefault()
             $.ajax({
                //url: 'http://localhost:3000/api/users/' ,
                url: '/api/users/authenticate'  ,
                method: 'get',
                data: loginObject.email
              }).then( res =>{
                  //: res.password
                  console.log("res", res.save)
              })
             //})
                //method: 'get',
                // data: { 
                //  email: loginObject.email,
                  
                // },

            //     success: (response) => {
            //         console.log('response:', response);
            //         for(var i =0; i<response.length; i++ ){
            //            if(response[i].email === loginObject.email){ 
            //                window.location.replace('/login')
            //           }  
            //     }     return
            //    },
            //     error: (err) => {
            //       console.log(err);
            //     } 
            //})
        
   }

// function handleFormOnsubmit(evt) {
//     evt.preventDefault()
//     httpClient.ResetPwd ({
      
//     //   password: loginObject.password,
//     //   image: loginObject.image,
       
//     }).then(user => {
//       console.log("user", user)
//       if (user) {
//         window.location.replace("/login")
//         this.props.onSignUpSuccess(user)
//         this.props.history.push('/')

// }
//       return (<div><p className="error">User Not found</p></div>)
//     }).catch();
//     clearForm()
//   }

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
                <label className="label">New Password</label>
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