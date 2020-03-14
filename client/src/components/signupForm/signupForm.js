import React from 'react';
import "./style.css";

export default function signupForm() {

    return (
        <div className='container'>
            <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input"/>
               </div>
            </div>
      
            <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Last name"/>
               </div>
            </div>
            <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                    <input className="input" type="text" placeholder="555-555-5555"/>
               </div>
            </div>
   
            <div className="field">
                 <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                         <input className="input is-danger" type="email" placeholder="Email " value=" "/>
                            <span className="icon is-small is-left">
                                 <i className="fas fa-envelope"></i>
                             </span>
                             <span className="icon is-small is-right">
                                 <i className="fas fa-exclamation-triangle"></i>
                             </span>
                        </div>
                            <p className="help is-danger">This email is invalid</p>
                        </div>
                <div className="field">
                <label className="label">Password</label>
                   <p className="control has-icons-left">
                   
                    <input className="input" type="password" placeholder="Password"/>
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
                    <button className="button is-link loginbtn">Submit</button>
                  </div>
               <div className="control">
                  <button className="button is-link is-light">Cancel</button>
               </div>
            </div>
      </div>

    )
}