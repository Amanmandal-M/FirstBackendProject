const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {signModel} = require("../Models/SignUpAndLogin.model");
require("dotenv").config();


const postLogin = async (req,res)=>{
    try {
       const {EmailId, Password} = req.body;
       const data1 = await signModel.find({EmailId});

       if(data1.length > 0) {
        bcrypt.compare(Password,data1[0].Password,(err,result) => {
            if(result){
                const token =jwt.sign({login:'user'},process.env.key);
                
                res.send({
                    "Message":"Data Added Successfully",
                    "Token":token,
                    "user":data1,
                    "status":200
                });
            }else{
                res.send({
                    "Message":err,
                    "status":401
                });
            }
        })
       }else{
            res.send(res.status(401));
       }
    } catch (error) {
        res.send("Error:(PostLogin): " + error)
    }
}

const getToken = (req, res) => {
    res.send("Data Validation Success")
}



module.exports = {postLogin,getToken}