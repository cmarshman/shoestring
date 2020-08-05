const express = require('express')
const usersCtrl = require('../controllers/index')
const verifyToken = require('../auth/index').verifyToken
 

const usersRouter = new express.Router()

usersRouter.route('/').get(usersCtrl.index)

usersRouter.route('/').post(usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.route('/:id').patch(usersCtrl.update)
usersRouter.route('/:id').delete(usersCtrl.destroy)
usersRouter.route('/pwd_reset').post(usersCtrl.reset_password)
 
usersRouter.use(verifyToken)

usersRouter.route('/:id').get(usersCtrl.show)

//usersRouter.route('/:id').patch(usersCtrl.update)

//usersRouter.route('/:id').delete(usersCtrl.destroy)

module.exports = usersRouter