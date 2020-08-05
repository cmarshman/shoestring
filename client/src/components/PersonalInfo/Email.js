import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';

function Email (currentUser) {
    
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })
    
    currentUser =[
        {
        name:currentUserObj.currentUser.name,
        phone: currentUserObj.currentUser.phone,
        email: currentUserObj.currentUser.email,
        password: currentUserObj.currentUser.password,
    }]
    
    return (
        <>
            {currentUserObj.currentUser !==null ?(
        <div className="box" id="email">
            <form >
                <p className="subtitle" id="formTitle">Edit your email</p>
                <div className="field">
                    {/* <label className="label"></label> */}
                    <div className="control has-icons-left has-icons-right">
                  <input className="input " type="email"
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    name="email"
                    placeholder={currentUser[0].email}
                    // value={values.email} 
                    />
                    {/* {!values.email.match(emailVal) &&  touched.email && 'errors' ? (
                        <p className="errMsg">Please enter a valid Email</p>
                      ): ''} */}
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-light"
                                //   onClick={handleFormOnsubmit} 
                                //   disabled={!values.phone.match(phoneno)}
                                //   disabled={!values.email.match(emailVal)}
                                //   disabled={!values.checked && 'errors'}
                                id="twofish"
                            >Submit</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
        ): window.location.replace("/")}
        </>
    )
}

export default Email