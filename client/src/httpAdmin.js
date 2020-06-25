import axios from 'axios'
import jwtDecode from 'jwt-decode'

// instantiate axios
const httpAdmin = axios.create()

httpAdmin.getToken = function() {
	return localStorage.getItem('token')
}

httpAdmin.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

httpAdmin.getCurrentUser = function() {
	const token = this.getToken()
	if(token) return jwtDecode(token)
	return null
}

httpAdmin.logIn = function(credentials) {	
	return this({ method: 'post', url: '/api/users/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token, {expiresIn: '30s'})
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

// SignUp function - if someone attempts to signup a second time, will return false
httpAdmin.signUp = function(userInfo) {
	return this({ method: 'post', url: '/api/users', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				console.log(`signup`)
				console.log(this.defaults)
				this.defaults.headers.common.token = this.setToken(token)
				console.log(this.defaults)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

///Find  a user from the database
httpAdmin.FindUser = function(userInfo, _id ) {
	return this({ method: 'get', url: '/api/users/'  + userInfo._id, data: userInfo})
}

///Find  a user from the database
httpAdmin.FindAllUser = function(userInfo) {
	return this({ method: 'get', url: '/api/users/', data: userInfo})
}

///Find and Update user
httpAdmin.InsertUpdate = function(userInfo , _id) {
	return this({ method: 'patch', url: '/api/users/' + userInfo._id, data: userInfo})
		.then((serverResponse) => {
			console.log("serverResponse", serverResponse)
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				console.log("result")
				console.log(this.defaults)
				this.defaults.headers.common.token = this.setToken(token)
				console.log(this.defaults)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

///Find and Update user
httpAdmin.password_reset = function(userInfo,  ) {
	return this({ method: 'post', url: '/api/pwd_reset/' , data: userInfo})
		.then((serverResponse) => {
			console.log("serverResponse", serverResponse)
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				console.log("result")
				console.log(this.defaults)
				this.defaults.headers.common.token = this.setToken(token)
				console.log(this.defaults)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpAdmin.logOut = function() {
	localStorage.removeItem('token')
	delete this.defaults.headers.common.token
	return true
}

// During initial app load attempt to set a localStorage stored token
// as a default header for all api requests.
httpAdmin.defaults.headers.common.token = httpAdmin.getToken()
export default httpAdmin
