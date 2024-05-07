const express=require('express');  //we are importing express module inthis project
const app=express();  //We just call express function

app.use(express.static('public'))

app.listen(4000,()=> {
    console.log("Server is started") //here we use call back function for checking if the server is started or not


})