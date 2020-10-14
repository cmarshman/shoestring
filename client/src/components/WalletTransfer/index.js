'use strict';

import React, { useCallback,useState, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import httpClient from "../../httpClient.js";
import * as Yup from 'yup';
import { useFormik, yupToFormErrors } from 'formik';
import $ from "jquery";
import "./style.css";
 var plaid = require ('plaid')
 

function WalletTransfer() {

 //setup currently logged in user
 const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser()
});

 //Load funtion on page load
//  useEffect(() => {
//      //onSuccess()
    
// }, [])

// const  onSuccess =  useCallback((public_token, metadata) => {
//     if (metadata){
//         $("#successMsg").attr("style", "color:green", "border: solid 1px");
//         $("#successMsg").text(
//           metadata.institution.name +  " has successfully been added",
//           console.log("metadata", metadata),
//           console.log("public token", public_token)
//         )
//     }

// })

    // const config = {
    //     clientName: "Shoestring",
    //     env: "sandbox",
    //     product: ["auth", "transactions"],
    //     publicKey: "a470a31fd930e601383597d010adba",
    //     onSuccess,
    //   };

      //const { open, ready, error } = usePlaidLink(config); 

     
    
     let  PLAID_CLIENT_ID ='5f5043414c3aa5001162c49a'; 
     let PLAID_SECRET = 'bff3465d3166f757d2464134f78efb'; 
     let PLAID_PRODUCTS='transactions' ;
     let PLAID_COUNTRY_CODES='US' ;
     let PLAID_ENV='sandbox' ;

     let client = new plaid.Client({
        clientID: PLAID_CLIENT_ID,
        secrets: PLAID_SECRET,
        env: plaid.environments[PLAID_ENV],
        options: {
          version: '2019-05-29',
        }
      }); 

     // Create a link token with configs which we can then use to initialize Plaid Link client-side.
// See https://plaid.com/docs/#create-link-token
//app.post('/api/create_link_token', function(request, response, next) {

const { open, ready, error } = usePlaidLink(

    $.ajax({
        url: '/api/create_link_token',
        method: 'POST',
      function(request, response, next) {
     const configs = {
      'user': {
        // This should correspond to a unique id for the current user.
        'client_user_id': 'user-id',
      },
      'client_name': "Shoestring",
      'products': PLAID_PRODUCTS,
      'secret': PLAID_SECRET,
      'country_codes': PLAID_COUNTRY_CODES,
      'language': "en",
    }
  
    // if (PLAID_REDIRECT_URI !== '') {
    //   configs.redirect_uri = PLAID_REDIRECT_URI;
    // }
    
    client.createLinkToken(configs, function(error, createTokenResponse) {
        if (error != null) {
          //prettyPrintResponse(error);
          console.log('err', error)
          return response.json({
            error: error,
          });
        }
        response.json(createTokenResponse);
        console.log('mylinks', createTokenResponse)
    })
  }
})
);

 // const { open, ready, error } = usePlaidLink(configs);
 
    return (
        <section>
        <div className="">
        <p className="subtitle " id="formTitle">
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
     

      <br/>
      
            <div className="tile is-ancestor columns">
                <div className="tile is-vertical column is-two-fifths banana box" id="tile1">
                    <p className="subtitle has-text-centered">
                        Add money to my wallet
                    </p>
                    <p>Enter the amount you would like to deposit into your bank account</p>
                    <p className="control has-icons-left">
                        <input className="input" type="text" name="name" placeholder="$50" />
                        <span className="icon is-small is-left">
                        <i className="fas fa-money-bill-wave-alt"></i>
                        </span>
                    </p>
                    <a className="button is-light" id="foundme">Add Money</a>

                </div>

                <div className="tile is-vertical is-clearfix column is-two-fifths banana box" id="tile2">
                    <p className="subtitle has-text-centered">
                        Deposit money to my bank account
                    </p>
                    <p>Enter the amount you would like to deposit into your bank account</p>
                    <p className="control has-icons-left">
                        <input className="input" type="text" name="name" placeholder="$50" />
                        <span className="icon is-small is-left">
                        <i className="fas fa-money-bill-wave-alt"></i>
                        </span>
                    </p>
                    <a className="button is-light" id="foundme">Deposit Money</a>

                </div>
            </div>    
            </section>
    );
}

export default WalletTransfer;