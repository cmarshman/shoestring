const express = require('express')
const adminCtrl = require('../controllers/admin')
const verifyToken = require('../auth/admin').verifyToken
 

const adminRouter = new express.Router()

adminRouter.route('/').get(adminCtrl.index)

adminRouter.route('/').post(adminCtrl.create)

adminRouter.post('/authenticate', adminCtrl.authenticate)

adminRouter.route('/:id').patch(adminCtrl.update)

adminRouter.route('/pwd_reset').post(adminCtrl.reset_password)
 
adminRouter.use(verifyToken)

adminRouter.route('/:id').get(adminCtrl.show)

//adminRouter.route('/:id').patch(adminCtrl.update)

adminRouter.route('/:id').delete(adminCtrl.destroy)

module.exports = adminRouter