const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
  name: { type: String, required: true, trim: true},
  phone: { type: String, required: true, trim: true },
  email: {type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
  password: {type: String, required: true, validate: [({ length }) => length >= 8, "Password should be  8 longer."]},
  city : { type: String, required: false, trim: true},
  state: {type: String, required: false, trim: true},
  friends: {type: Array, required: false },
  sentTransactions: {type: Array, required: false },
  receivedTransactions : {type: Array, required: false },
  sentBankTransactions: {type: Array, required: false },
  receivedBankTransactions : {type: Array, required: false },
  plaidToken: {type: String, required: false},
  institution :{type: String, required: false},
  accountType:{type: String, required: false},
  image: {type: String, required: false },
  checked: {type: Boolean, required: true},
  amount:{type: Number, require: false, trim: true},
  balance:{type: Number, require: false, trim: true},
  message: {type: String, require: false},
  date: {type: Date, default: Date.now }
});

// adds a method to a user document object to create a hashed password
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// adds a method to a user document object to check if provided password is correct
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password)
}

// middleware: before saving, check if password was changed,
// and if so, encrypt new password before saving:
userSchema.pre('save', function(next) {
	console.log(`Just triggered the pre save hook`)
	console.log(this.isModified('password'))
	if(this.isModified('password')) {
		this.password = this.generateHash(this.password)
		next()
	} else {
	next()
	}
})

const User = mongoose.model('User', userSchema)
module.exports = User
