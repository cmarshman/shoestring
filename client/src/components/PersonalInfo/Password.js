import React from 'react';

const Password = () => {
    return (
        <form>
            <p className="subtitle" id="formTitle">Update your password</p>
            <div className="field">
                <label className="label">Enter your current password</label>
                <p className="control has-icons-left">
                    <input className="input " type="password"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        name="password"
                        placeholder="Password (required)"
                        // value={values.password}
                         />
                    {/* {values.password.length < 8 && touched.password && 'errors' ? (
                        <p className="errMsg">Please enter a valid Password</p>
                    ) : ''} */}
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
                <label className="label">Enter your new password</label>
                <p className="control has-icons-left">
                    <input className="input " type="password"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        name="password"
                        placeholder="Password (required)"
                        // value={values.password}
                         />
                    {/* {values.password.length < 8 && touched.password && 'errors' ? (
                        <p className="errMsg">Please enter a valid Password</p>
                    ) : ''} */}
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
                <label className="label">Confirm your new password</label>
                <p className="control has-icons-left">
                    <input className="input " type="password"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        name="password"
                        placeholder="Password (required)"
                        // value={values.password}
                         />
                    {/* {values.password.length < 8 && touched.password && 'errors' ? (
                        <p className="errMsg">Please enter a valid Password</p>
                    ) : ''} */}
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
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
    )
}

export default Password