// // var bodyParser = require('body-parser');
// var express = require('express');
// var plaid = require('plaid');
// //import plaid from 'plaid'
// //import express from 'express';
// const User = require('./../models/signupSchema')
 
// // We store the access_token in memory - in production, store it in
 
// //const app = express();

// var PLAID_CLIENT_ID ='5f5043414c3aa5001162c49a';
// var PLAID_SECRET = '71e44ba0722d2f7f6decbd9d6943ac';
// var PLAID_ENVIRONMENT ="development";

// const plaidClient = new plaid.Client({
//   clientID: PLAID_CLIENT_ID,
//   secret: PLAID_SECRET,
//   env: PLAID_ENVIRONMENT,
//   options: { version: '2019-05-29' },
// })

 

// const app = express();

// // Create a link_token to initialize Link
// app.post('/create_link_token', async function(request, response, next) {
//   // Grab the client_user_id by searching for the current user in your database
//   const user = await User.show();
//   const clientUserId = user.id;

//   // Create the link_token with all of your configurations
//  // 2. Create a link_token for the given user
//  plaidClient.createLinkToken({
//   user: {
//     client_user_id: clientUserId,
//   },
//   client_name: 'My App',
//   products: ['transactions'],
//   country_codes: ['US'],
//   language: 'en',
//   webhook: 'https://sample.webhook.com',
// }, (err, res) => {
//   const link_token = res.link_token;

//   // 3. Send the data to the client
//   response.json({ link_token });
// });
// });

// app.listen(3000, function() {
// console.log('server listening on port 3000');
// });