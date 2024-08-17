const express = require('express');
const app = express();
const connection = require('./src/config/DBconnection');
const admin = require('./src/routes/adminRoutes');
connection();  //Database Connection

app.use(express.json());

app.get('/',(req,res)=>{
    console.log("HOME");
    res.send("Hello world !")  //Home
})

app.use('/auth',admin)   //admin login

console.log(process.env.DBCONNECT)


app.listen(3000,()=>{
    console.log("Server is running...")
})