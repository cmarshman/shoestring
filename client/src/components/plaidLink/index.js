import React, { useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import $ from 'jquery'
import './style.css'
 
const Plaid = () => {
  const onSuccess = useCallback(
    (token, metadata) => { 
      $('#successMsg').attr("style", "color:green", 'border: solid 1px')
      $('#successMsg').text( metadata.institution.name + "has successfully been added");

    },
    []
  );

  const config = {
    clientName: 'Shoestring',
    env: 'development',
    product: ['auth', 'transactions'],
    publicKey: 'a470a31fd930e601383597d010adba',
    onSuccess
    
  };
 
  const { open, ready, error } = usePlaidLink(config);
  return (

    <>

    <button type="button" className="button" id="fluffyduck" onClick={() => open()} disabled={!ready}>
      Connect your bank account
    </button>
    <div id='successMsg'  ></div>
    </>
  );
};
export default Plaid;
