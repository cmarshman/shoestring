const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const adminSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: {type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
  password: {type: String, required: true, validate: [({ length }) => length >= 12, "Password should be 12 characters or longer."]},
  city : { type: String, required: false},
  state: {type: String, required: false},
  image: { type: String, required: false },
  checked: {type: Boolean, required: true},
  message: {type: String, require: false},
  date: { type: Date, default: Date.now }
});

// adds a method to a admin document object to create a hashed password
adminSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// adds a method to a admin document object to check if provided password is correct
adminSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password)
}

// middleware: before saving, check if password was changed,
// and if so, encrypt new password before saving:
adminSchema.pre('save', function(next) {
	console.log(`Just triggered the pre save hook`)
	console.log(this.isModified('password'))
	if(this.isModified('password')) {
		this.password = this.generateHash(this.password)
		next()
	} else {
	next()
	}
})

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin