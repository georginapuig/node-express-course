const express = require('express'); // access to the express library by searching your node_modules for "express"
const app = express(); // creates an instance of the express constructor, which we will name "app"  

app.listen(8000,function(){
  console.log("server is running");
  });