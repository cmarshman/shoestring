import React, { useState, useEffect } from 'react';
import httpClient from "../../httpClient";
import * as Yup from 'yup';
import { useFormik } from 'formik';


//Setup  validation condition on the schema using Yup
const validationSchenma = Yup.object({
  email: Yup.string().required(),
  name: Yup.string().required(),
  phone: Yup.number().required(),
  city: Yup.string(),
  state: Yup.string(),

});

function PersonalInfo() {

   const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      city: "",
      state: "",
      email: "",
      

    },
    validationSchenma,
    onSubmit(values) {
        console.log('values', values)
        updateUser(values)
    }
});
 
useEffect(() => {
  changeCurrentState()
  
}, [])

    const [currentUserObj, setCurrentUserObj] = useState({
        currentUser: httpClient.getCurrentUser(),
      });
    
    //setup results state
    const [friendResult, setFriendResult] = useState([{}]);

       //declare some variables
      let currentUser = currentUserObj.currentUser
      let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      let emailVal = /.+@.+\..+/;
      
      //Function to update the  current user state
      const changeCurrentState = () =>{
        httpClient.FindAllUser()
        .then(serverResponse => {
            const data = serverResponse.data
            let findCurrentUser = data.find(item => item._id === currentUser._id)
            
            if(findCurrentUser !=null){
              setFriendResult(findCurrentUser)
              console.log("findCurrentUser", findCurrentUser)
            }
     })
    }
     let fields = values
    //Function to  insert the update information into the data
      const updateUser =() => {
            httpClient.InsertUpdate({
              _id: currentUser._id,
              name:  values.name? values.name : friendResult.name,
              phone: values.phone? values.phone : friendResult.phone,
              city:  values.city ? values.city : friendResult.city,
              state: values.state ? values.state : friendResult.state,
              email: values.email? values.email : friendResult.email,
             },window.location.replace(''))
             .catch(err => console.log('err', err))
            }
   
  //Display  all  the  data on the page 
    return (
        <>
          {currentUserObj.currentUser !== null ? (
           <div>
           <div id="name">
              <div>
              <form onSubmit={handleSubmit}>
                  <p className="subtitle" id="formTitle">
                    Edit your name
                  </p>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder={friendResult.name}
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur} 
                      />
                      {/* {values.name.length < 1 && touched.name && 'errors' ? (
                    <p className="errMsg">Please enter your name</p>
                            ): ''} */}
                      <span className="icon is-small is-left">
                        <i className="fas fa-user-astronaut"></i>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="phone-number">
              <div>
                <form>
                  <p className="subtitle" id="formTitle">
                    Edit your phone number
                  </p>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="phone"
                        placeholder={friendResult.phone}
                        onChange={handleChange}
                        value={values.phone}
                        onBlur={handleBlur} 
                      />
                      {!values.phone.match(phoneno) &&  touched.phone && 'errors' ? (
                              <p className="errMsg">Please enter a valid Phone</p>
                            ): ''}
                      <span className="icon is-small is-left">
                        <i className="fas fa-mobile-alt"></i>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="location">
              <div>
                <form>
                  <p className="subtitle" id="formTitle">
                    Edit your location
                  </p>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="city"
                        placeholder={friendResult.city}
                        onChange={handleChange}
                        value={values.city}
                        onBlur={handleBlur} 
                      />
                      {values.city.length <2 &&  touched.city && 'errors' ? (
                        <p className="errMsg">Please enter a valid City</p>
                    ): ''}
                      <span className="icon is-small is-left">
                        <i className="fas fa-city"></i>
                      </span>
                    </div>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="state"
                        placeholder={friendResult.state}
                        onChange={handleChange}
                        value={values.state}
                        onBlur={handleBlur} 
                      />
                      {values.state.length < 2 &&  touched.state && 'errors' ? (
                    <p className="errMsg">Please enter a valid State</p>
                    ): ''}
                      <span className="icon is-small is-left">
                        <i className="far fa-compass"></i>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="email">
              <div>
                <form>
                  <p className="subtitle" id="formTitle">
                    Edit your email
                  </p>
                  <div className="field">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input "
                        type="email"
                        name="email"
                        placeholder={friendResult.email}
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur} 
                      />
                      {!values.email.match(emailVal) &&  touched.email && 'errors' ? (
                        <p className="errMsg">Please enter a valid Email</p>
                      ): ''}
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                    <div className="field is-grouped">
                      <div className="control">
                        <button className="button is-light" id="twofish" 
                         onClick={updateUser}
                         >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            </div>
) : (
    window.location.replace("/")
  )}
</>
);
}

export default PersonalInfo;
