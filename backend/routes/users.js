var express = require('express');
var router = express.Router();
const fs= require("fs");
const crypto = require("crypto-js");

//skapa en användare
//logga in användare
// data ska skickas till mongoDB
//koppla produkt till användare i kundkorg


router.get('/', function(req, res, next) {
  res.json(users);
});




/***********skapa ny användare**********/
router.post('/', function(req, res, next) {  
  /***********skapa ny användare till databasen*/
  let newUser = {name: req.body.name};
  let usersPassword = crypto.SHA3(req.body.password).toString();
  newUser.password =usersPassword;
  console.log("new User", newUser);

  req.app.locals.db.collection("users").insertOne(newUser)
  .then(result =>{
    console.log("result från db", result);
    res.json(result);
  })
})






module.exports = router;
