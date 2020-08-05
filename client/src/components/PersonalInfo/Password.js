import React, { useState } from "react";
import httpClient from "../../httpClient";
import * as Yup from "yup";
import { useFormik } from "formik";
import $ from "jquery";

const validationSchenma = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
  password: Yup.string().required().min(8),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Password = () => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchenma,
    onSubmit(values) {
      resetUser(values);
    },
  });

  //Function
  const resetUser = (evt) => {
    const userEmail = values.email;
    httpClient.FindAllUser().then((serverResponse) => {
      const data = serverResponse.data;
      let findEmail = data.find((item) => item.email === userEmail);
      console.log("find", findEmail);
      if (findEmail === undefined) {
        console.log("findEmail", findEmail);
        $("#resetPwd").attr("style", "color:red");
        $("#resetPwd").text("Email not found- try again or register.");
        return;
      }
      //Insert the new password after update
      httpClient
        .InsertUpdate({
          _id: findEmail._id,
          password: values.password,
        })
        .then(window.location.replace("/settings"))
        .catch((err) => console.log("err", err));
    });
  };

  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser(),
  });

  return (
    <>
      {currentUserObj !== null ? (
        <form onSubmit={handleSubmit}>
          <p className="subtitle" id="formTitle">
            Update your password
          </p>
          <div className="field">
            <label className="label">
              Enter your the email associated with the account
            </label>
            <p className="control has-icons-left">
              <input
                className="input"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                placeholder="Email (required)"
                value={values.email}
                onBlur={handleBlur}
              />
              <div id="resetPwd"></div>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
            <label className="label">Enter your new password</label>
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                placeholder="Password (required)"
                value={values.password}
                onBlur={handleBlur}
              />
              {values.password.length < 8 && touched.password && "errors" ? (
                <p className="errormsg">Please enter a valid password</p>
              ) : (
                ""
              )}
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
            <label className="label">Confirm your new password</label>
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="confirm_password"
                placeholder="Confirm Password (required)"
                value={values.confirm_password}
                onBlur={handleBlur}
              />
              {values.confirm_password !== values.password &&
              touched.email &&
              "errors" ? (
                <p className="errormsg">Passwords do not match</p>
              ) : (
                ""
              )}
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-light"
                  disabled={
                    values.confirm_password !== values.password && "errors"
                  }
                  onClick={resetUser}
                  id="twofish"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        window.location.replace("/")
      )}
    </>
  );
};

export default Password;
