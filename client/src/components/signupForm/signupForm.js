import React from 'react';
import "./style.css";

export default function signupForm(props) {

    return (
        <div className='container box'>
            <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                <input className="input" type="text"
                onChange={handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
                value={signupObject.firstName}
                />
                    
            </div>
        </div>
      
            <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                <input className="input" type="text"
                onChange={handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
                value={signupObject.lastName}
                />              
            </div>
        </div>
        <div className="field">
            <label className="label">Phone</label>
            <div className="control"> 
                <input className="input" type="text"
                onChange={handleInputChange}
                name="phone"
                placeholder="555-555-5555 (required)"
                value={signupObject.phone}
                /> 
                   
            </div>
        </div>
   
        <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input " type="email" 
                    onChange={handleInputChange}
                    name="email"
                    placeholder="Email (required)"
                    value={signupObject.email}/>
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
            </div>
                    <p className="help ">This email is invalid</p>
        </div>
            <div className="field">
                <label className="label">Password</label>
                   <p className="control has-icons-left">
                   <input className="input " type="password" 
                    onChange={handleInputChange}
                    name="password"
                    placeholder="Password (required)"
                    value={signupObject.password}/>   

                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <div className="control">
                    <label className="checkbox">
                        <input type="checkbox" />
                        I agree to the <a href="#"> terms and conditions</a>
                    </label>
                </div>
            </div>



              <div className="field is-grouped">
                 <div className="control">
                    <button className="button is-link loginbtn" onClick={handleFormOnsubmit}>Submit</button>
                  </div>
               <div className="control">
                  <button className="button is-link is-light">Cancel</button>
               </div>

            </div>
        </div>
    )
}