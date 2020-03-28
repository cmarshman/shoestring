
const express =     require('express')
const usersCtrl =   require('../controllers')
const verifyToken = require('../auth').verifyToken
// path = require("path");


const usersRouter = new express.Router()

// usersRouter.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "/client/build/index.html"));
//   });

usersRouter.route('/').get(usersCtrl.index)

usersRouter.route('/').post(usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.use(verifyToken)

usersRouter.route('/:id').get(usersCtrl.show)

usersRouter.route('/:id').patch(usersCtrl.update)

usersRouter.route('/:id').delete(usersCtrl.destroy)

module.exports = usersRouter