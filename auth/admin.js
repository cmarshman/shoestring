const jwt = require('jsonwebtoken');
const Admin = require('../models/signupAdminSchema.js')

// Note this is the supper secret for signing the JWT
// this should be acquired via .env or a microservice
const JWT_SECRET  = 'ourdreamwillcometrue'

// function for creating tokens
function signToken(admin) {
	// toObject() returns a basic js object 
	// comprised of data from db. Delete password before creating jwt
	const adminData = admin.toObject()
	delete adminData.password
	return jwt.sign(adminData, JWT_SECRET, {expiresIn:'30s'})
}

// function for verifying tokens
function verifyToken(req, res, next) {
	// grab token from either headers, req.body, or query string
	const token = req.get('token') || req.body.token || req.query.token
	// if no token present, deny access
	if(!token) return res.json({success: false, message: "No token provided"})
	// otherwise, try to verify token
	jwt.verify(token, JWT_SECRET,  (err, decodedData) => {
		// if problem with token verification, deny access
		if(err) return res.json({success: false, message: "Invalid token."})
		   
		// otherwise, search for admin by id that was embedded in token
		admin.findById(decodedData._id , (err, admin) => {
			// if no admin, deny access
			if(!admin) return res.json({success: false, message: "Invalid token."})
			// otherwise, add admin to req object
			req.admin = admin
			// go on to process the route:
			next()
		})
	})
}

module.exports = {
	signToken,
	verifyToken
}