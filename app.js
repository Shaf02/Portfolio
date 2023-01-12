const express = require ("express");
const bodyParser = require ("body-parser");
const https = require ("https");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/'));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});
app.get("/resume", function(req,res){
  res.sendFile(__dirname + "/CV.html");
});


app.listen(3000);
