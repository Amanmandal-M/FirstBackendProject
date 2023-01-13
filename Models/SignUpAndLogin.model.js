const mongoose = require('mongoose');

const signSchema = mongoose.Schema({
    Username:String,
    EmailId:String,
    DateOfBirth:String,
    Role:String,
    Location:String,
    Password:String
})

const signModel = mongoose.model('signupuser', signSchema);

module.exports = {signModel}