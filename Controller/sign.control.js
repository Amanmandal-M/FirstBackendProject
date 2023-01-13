const {signModel} = require("../Models/SignUpAndLogin.model")
const bcrypt = require("bcrypt")

const getSign = async (req,res)=>{
    try {
        const data = await signModel.find();
        res.send(data);
    } catch (error) {
        console.log("Error: "+ error);
    }
}

const postSign = async (req,res)=>{
    const {Username,EmailId,Password,DateOfBirth,Role,Location} = req.body;
    try {
       bcrypt.hash(Password,5,(err,secure_password)=>{
        if(err){
            console.log(err);
            res.send(err);
        }else{  
        const data = new signModel({
            Username,
            EmailId,
            Password:secure_password,
            DateOfBirth,
            Role,
            Location
        })
         data.save();
        res.send("Data Added successfully");
        }
       })
    } catch (error) {
        console.log("Error:(postSign): "+ error);
    }
}

const getSignById = async (req, res) => {
    try {
        const data = await signModel.findById(req.params.id);
        res.send(data);
    } catch (error) {
        console.log("Error: "+ error);
    }
}

module.exports = {getSign,postSign,getSignById}