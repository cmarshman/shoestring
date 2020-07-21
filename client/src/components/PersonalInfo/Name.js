import React from 'react';

const Name = () => {
    return (
        <>
            <div className="box">
                <form id="name">
                    <p className="subtitle" id="formTitle">Edit your name</p>
                    <div className="field">
                        <label className="label">Show current name here</label>
                        <div className="control has-icons-left">
                            <input className="input"
                                type="text"
                                // onChange={handleChange}
                                // onBlur={handleBlur}
                                name="name"
                                placeholder="Update your name"
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
        </>
    );
}

export default Name;