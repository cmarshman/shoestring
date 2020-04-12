import React, { useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';
 
const Plaid = () => {
  const onSuccess = useCallback(
    (token, metadata) => console.log('onSuccess', token, metadata),
    []
  );

  const onEvent = useCallback(
    (eventName, metadata) => console.log('onEvent', eventName, metadata),
    []
  );

  const onExit = useCallback(
    (err, metadata) => console.log('onExit', err, metadata),
    []
  );
 
  const config = {
    clientName: 'Shoestring',
    env: 'development',
    product: ['auth', 'transactions'],
    publicKey: 'a470a31fd930e601383597d010adba',
    onSuccess,
    onEvent,
    onExit,
    // ...
  };
 
  const { open, ready, error } = usePlaidLink(config);
  return (
    <button type="button" className="button" onClick={() => open()} disabled={!ready}>
      Connect your bank account
    </button>
  );
};
export default Plaid;
