require("dotenv").config();
//import express
const express = require("express");
const { connDb } = require("./config/db");

const route= require("./route/user.route")

//create server instance

const server = express();
connDb();
// middleware
server.use(express.json())
server.get("/" ,(req, res)=>{
    res.send("<h1>Welcome Home</h1>")
})
server.use("/api/v1",route)
module.exports = server