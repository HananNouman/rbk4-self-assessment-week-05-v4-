var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});
 // var create=function(user){
 // 	new User({username:user.username});
 // };
  //thats a build in function
app.get('/users',function(req,res){
//var data=sequelize.query("SELECT * FROM Users");
var data=User.findAll();
console.log("zZzz",data);
res.send(data)
})

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */



module.exports = { 
  app: app,
  User: User
};
