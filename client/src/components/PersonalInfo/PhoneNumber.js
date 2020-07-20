import React from 'react';

const PhoneNumber = () => {
    return (
        <div className="box">
            <form id="phone-number">
                <p className="subtitle" id="formTitle">Edit your phone number</p>
                <div className="field">
                    <label className="label">Show current number here</label>
                    <div className="control has-icons-left">
                  <input className="input" type="text"
                //    onChange={handleChange}
                //    onBlur={handleBlur}
                   name="phone"
                   placeholder="555-555-5555"
                //    value={values.phone}
                  />
                  {/* {!values.phone.match(phoneno) &&  touched.phone && 'errors' ? (
                              <p className="errMsg">Please enter a valid Phone</p>
                            ): ''} */}
                  <span className="icon is-small is-left">
                    <i className="fas fa-mobile-alt"></i>
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
    )
}

export default PhoneNumber;