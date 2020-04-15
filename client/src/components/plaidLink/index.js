import React, { useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import './style.css'
 
const Plaid = () => {
  const onSuccess = useCallback(
    (token, metadata) => console.log('onSuccess', token, metadata),
    []
  );

  const config = {
    clientName: 'Shoestring',
    env: 'development',
    product: ['auth', 'transactions'],
    publicKey: 'a470a31fd930e601383597d010adba',
    onSuccess,
    
  };
 
  const { open, ready, error } = usePlaidLink(config);
  return (
    <button type="button" className="button" id="fluffyduck" onClick={() => open()} disabled={!ready}>
      Connect your bank account
    </button>
  );
};
export default Plaid;
