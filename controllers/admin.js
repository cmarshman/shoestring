const Admin = require('../models/signupAdminSchema')
const signToken = require('../auth/admin').signToken

module.exports = {
	// list all admins
	index: (req, res) => {
		Admin.find({}, (err, admins) => {
			res.json(admins)
		})
	},

	// get one admin
	show: (req, res) => {		
		Admin.findById(req.params.id, (err, admin) => {
			res.json(admin)
		})
	},

	// create a new admin
	create: (req, res) => {
		Admin.create(req.body, (err, admin) => {
			if(err) return res.json({success: false, code: err.code})
			// once admin is created, generate a JWT and return to client"
			const token = signToken(admin)
			res.json({success: true, message: "admin created. Token attached.", token})
		})
	},

	// update an existing admin
	update: (req, res) => {
		Admin.findById(req.params.id, (err, admin) => {
			Object.assign(admin, req.body)
			admin.save((err, updatedUser) => {
				res.json({success: true, message: "admin updated.", admin, updatedUser})
			})
		})
	},

	// delete an existing admin
	destroy: (req, res) => {
		Admin.findByIdAndRemove(req.params.id, (err, admin) => {
			res.json({success: true, message: "admin deleted.", admin})
		})
	},

	// the reset password route
	reset_password: (req, res) => {
		// check if the admin exists
		Admin.findOne({email: req.body.email}, (err, admin) => {
			// if there's no admin or the password is invalid
			if(!admin) {
				// deny access
				return res.json({success: false, message: "Invalid credentials."})
			}
			const token = signToken(admin)
			res.json({success: true, message: "Token attached.", token})
		})
	},

	// the login route
	authenticate: (req, res) => {
		// check if the admin exists
		Admin.findOne({email: req.body.email}, (err, admin) => {
			// if there's no admin or the password is invalid
			if(!admin || !admin.validPassword(req.body.password)) {
				// deny access
				return res.json({success: false, message: "Invalid credentials."})
			}

			const token = signToken(admin)
			res.json({success: true, message: "Token attached.", token})
		})
	}
}
