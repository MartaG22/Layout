const express = require('express');

const routes = express.Router();
// const {authJWT, authentication} = require('../middlewares/authentication.js')


// const registerUser = require('../controllers/user/registerUserController.js');
// const loginUser = require('../controllers/user/loginUserController.js');
const sendResult = require("../controllers/calculateControllers.js")
// const calculate = require("../controllers/calculateControllers.js")

routes.post('/result', sendResult);
// routes.post('/login', authentication, loginUser);

// routes.post()

module.exports = routes;