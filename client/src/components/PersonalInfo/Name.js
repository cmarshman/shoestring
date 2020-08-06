import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';

function Name(currentUser) {
    
    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser()
    })
    
    currentUser = [
        {
        name:currentUserObj.currentUser.name,
        
    }]

    return (
        <>
            {currentUserObj.currentUser !==null ?(
            <div className="box" >
                <form>
                    <p className="subtitle" id="formTitle">Edit your name</p>
                    <div className="field">
                        <div className="control has-icons-left">
                            <input className="input"
                                type="text"
                                // onChange={handleChange}
                                // onBlur={handleBlur}
                                name="name"
                                placeholder={currentUser[0].name}
                            // value={values.name}
                            />
                            {/* {values.name.length < 1 && touched.name && 'errors' ? (
                    <p className="errMsg">Please enter your name</p>
                            ): ''} */}
                            <span className="icon is-small is-left">
                                <i className="fas fa-user-astronaut"></i>
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
    );
}

export default Name;