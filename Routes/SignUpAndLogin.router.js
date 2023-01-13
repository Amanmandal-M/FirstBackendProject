const express = require('express');
const {getSign,postSign,getSignById} = require("../Controller/sign.control")

const SignRouter = express.Router();


SignRouter.get("/allUsers",getSign)

SignRouter.post("/addData",postSign)

SignRouter.get("/getUserById/:id",getSignById)

module.exports={SignRouter}