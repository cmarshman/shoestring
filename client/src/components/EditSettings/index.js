import React, { useState } from "react";
import Password from "../PersonalInfo/Password";
import AddImage from "../AddImage";
import httpClient from "../../httpClient";
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Plaid from '../plaidLink';
import './style.css';

function EditSettings(currentUser) {
  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser(),
  });

  currentUser = [
    {
      name: currentUserObj.currentUser.name,
      email: currentUserObj.currentUser.email,
      city: currentUserObj.currentUser.city,
      state: currentUserObj.currentUser.state,
      phone: currentUserObj.currentUser.phone,
    },
  ];

  return (
    <>
      {currentUserObj.currentUser !== null ? (
        <div className="column is-two-thirds content" id="personal-information">
          <div className="box">
            <h2 className="title is-3">Update your account</h2>
            <p>
              If you are changing your personal information, please make sure it
              is the same as the legal informtaion associated with your bank
              account.
            </p>
            <PersonalInfo/>
          </div>
          <div id="edit-password">
            <div className="box">
              <Password />
            </div>
          </div>
          <br/>
          <div id="edit-photo">
            <div className="box">
              <AddImage />
            </div>
          </div>
          <br/>
          <div id="edit-bank-informaion">
              <div className="box " >
                <Plaid/>
              </div>
          </div>
        </div>
      ) : (
        window.location.replace("/")
      )}
    </>
  );
}

export default EditSettings;
