import React, { useCallback,useState, useEffect  } from "react";
import { usePlaidLink } from "react-plaid-link";
import httpClient from '../../httpClient';
import $ from "jquery";
import "./style.css";
const plaid = require('plaid');
 
const Plaid = () => {
  

  //Set current user state
  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser()
})

//console.log("hey", currentUserObj.currentUser._id)

  const  onSuccess =  useCallback((public_token, metadata) => {
    $("#successMsg").attr("style", "color:green", "border: solid 1px");
    $("#successMsg").text(
      metadata.institution.name +  " has successfully been added",
      console.log("metadata", metadata),
      console.log("public token", public_token)
    )
    
    httpClient.InsertUpdate({
      _id: currentUserObj.currentUser._id,
      //plaidToken:  public_token
      plaidToken: public_token ? " " : public_token 
     }) 
     plaid_exchange ()
  },[]);
  
  const config = {
    clientName: "Shoestring",
    env: "sandbox",
    product: ["auth", "transactions"],
    publicKey: "a470a31fd930e601383597d010adba",
    onSuccess,
  };
  //variables 
  // let PLAID_CLIENT_ID = "5e45d9e00f9243001237c447";
  // let  PLAID_SECRET = "bff3465d3166f757d2464134f78efb";
  // let PLAID_PUBLIC_KEY = "a470a31fd930e601383597d010adba";
  // let PLAID_ENV = "sanbox";
  // let ACCESS_TOKEN = null;
  // let PUBLIC_TOKEN = null;
  // let ITEM_ID = null;

  // //Initialize the client 
  // const plaidClient = new plaid.Client({
  //   clientID: process.env.PLAID_CLIENT_ID,
  //   secret: process.env.PLAID_SECRET,
  //   env: plaid.environments.development,
  //   options: {
  //     version: '2018-05-22',
  //   },
  // });

  var PLAID_CLIENT_ID = "5e45d9e00f9243001237c447";
  var PLAID_SECRET = "3e32fe89ce9a6c586bd001cf7be2f3";
  var PLAID_PUBLIC_KEY = "a470a31fd930e601383597d010adba";
  var PLAID_ENV = "sandbox";
  var ACCESS_TOKEN = null;
  var PUBLIC_TOKEN = null;
  var ITEM_ID = null;
  
  // Initialize the Plaid client
  var plaidClient = new plaid.Client(
    PLAID_CLIENT_ID,
    PLAID_SECRET,
    PLAID_PUBLIC_KEY,
    plaid.environments[PLAID_ENV],
    { version: "2019-05-29", clientApp: "Plaid Quickstart" }
  );
  




  //Function to Exchage the Public token
  //httpClient.post('/plaid_exchange', 
  
  const plaid_exchange = () => {
    var public_token = currentUserObj.currentUser.plaidToken;
    
    return plaidClient.exchangePublicToken(public_token)
    .then(res => console.log('access', res.access_token))
    .then(accessToken => plaidClient.getAccounts(accessToken))
    .then(res => console.log("my account", res.accounts))
    .catch(err => {
      // Indicates a network or runtime error.
      if (!(err instanceof plaid.PlaidError)) {
        //res.sendStatus(500);
        console.log("error occured")
        return;
      }
    })
  }
 
  

  const { open, ready, error } = usePlaidLink(config);

  return (
    <>
      <div className="">
        <p className="subtitle" id="formTitle">
          Update your Bank Account
        </p>
        <button
          type="button"
          className="button column is-centered"
          id="fluffyduck"
          onClick={() => open()}
          disabled={!ready}
        >
          Connect your bank account
        </button>
        <div id="successMsg"></div>
      </div>
    </>
  );
}

export default Plaid;