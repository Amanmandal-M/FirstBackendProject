const express = require('express');
const cors = require('cors');
const {connection} = require('./Configs/db')
const {SignRouter} = require('./Routes/SignUpAndLogin.router');
const {LoginRouter} = require('./Routes/loginRoute');

require("dotenv").config()

const app = express();
app.use(express.json());

app.use(cors());
app.get("/",(req,res)=>{
    res.send("Welcome in This Api")
})
app.use(SignRouter)
app.use(LoginRouter)


app.listen(process.env.port , async ()=>{
    try {
        connection
        console.log(`Connected To Database `);
        console.log(`Connection Established on Port : ${process.env.port}`)
    } catch (error) {
        console.log("Error: "+ error);   
    }
})

