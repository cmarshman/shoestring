//import React from 'react'
import React, { useState, useEffect } from "react";
import httpClient from '../httpClient'
import $ from 'jquery';
import Nav from '../components/navbar' 
import '../pages/design/login.css'


 const  ResetPwd =() =>{

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


    const resetUser = (evt) =>{
        const userEmail = loginObject.email
        httpClient.FindAllUser()   
        .then(serverResponse => {
         setLoginObject(serverResponse.data);
            const data = serverResponse.data
            console.log("data", data)
            let findEmail=data.find(item =>item.email===userEmail)
            console.log("find", findEmail)
            if(findEmail === undefined){
                console.log("findEmail", findEmail)
                return
            }
            httpClient.InsertUpdate({
                _id:  findEmail._id,
                password: loginObject.password
            })
            .then(user => {
                if(!user) console.log("user not found")
               
                console.log("success",    user)
            })
            
            //window.location.replace('/login')
            .catch(err => console.log('err', err))
        })
    }
         
    
    // const password_reset = (evt) =>{
    //     const userEmail = loginObject.email
    //     httpClient.password_reset()   
    //     .then(serverResponse => {
    //      setLoginObject(serverResponse.data);
    //         const data = serverResponse.data
    //         console.log("data", data)
    //         //let findEmail=data.find(item =>item.email===userEmail)
    //        // console.log("find", data)
    //         // httpClient.InsertUpdate({
    //         //     _id:  findEmail._id,
    //         //     password: loginObject.password
    //         // })
    //         .then(user => {
    //             if(!user) console.log("user not found")
               
    //             console.log("success",    user)
    //         })
            
    //         //window.location.replace('/login')
    //         .catch(err => console.log('err', err))
    //     })
    // }
         
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
                <label className="label">Confirm Password</label>
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password"
                            onChange={handleInputChange}
                            name="confirmpassword"
                            placeholder="Confirm Password (required)"
                            value={loginObject.confirmpassword} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>

                <div className="field">
                    <p className="control">
                        <button className="button is-success loginbtn"
                            onClick={resetUser}>
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