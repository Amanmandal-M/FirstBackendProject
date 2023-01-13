const express = require('express');
const {postLogin,getToken} = require("../Controller/login.control");
const { validator } = require('../Middlewares/authenticator');

const LoginRouter = express.Router();


LoginRouter.post("/addLoginData",postLogin)
LoginRouter.use(validator)
LoginRouter.get("/tokens",getToken)



module.exports={LoginRouter}