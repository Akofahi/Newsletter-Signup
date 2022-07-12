const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")

const app = new express();

app.listen("3000",()=>{
    console.log("Listen on port 3000");
})