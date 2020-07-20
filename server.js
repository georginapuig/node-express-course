const express = require('express'); // access to the express library by searching your node_modules for "express"
const app = express(); // creates an instance of the express constructor, which we will name "app"  

const mockUserData=[
  { name:'Mark' },
  { name:'Jill' }
];

app.get('/users', function(req,res){
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData
  });
});

app.get('/users/:id',function(req,res){
	console.log(req.params.id);
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	});
});

app.listen(8000,function(){
  console.log("server is running");
});