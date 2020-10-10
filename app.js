const express = require('express');

const app =express();
app.use(express.static('public'));
app.get("/",function(req , res){
  res.sendFile(__dirname+"/index.html");
});
app.get("/portfolio",function(req , res){
  res.sendFile(__dirname+"/portfolio.html");
});
app.get("/about",function(req , res){
  res.sendFile(__dirname+"/about.html");
});
app.listen(process.env.PORT);
