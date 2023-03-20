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
router.post('/add', function(req, res, next) {  
  let newUser = {name: req.body.name};
  let usersPassword = crypto.SHA3(req.body.password).toString();
  let usersEmail = (req.body.email);
  newUser.password =usersPassword;
  newUser.email = usersEmail;
  console.log("new User", newUser);

  req.app.locals.db.collection("users").insertOne(newUser)
  .then(result =>{
    console.log("result från db", result);
    res.json(result);
  })
})

/***************logga in användare**********/
router.post('/login', function(req, res, next){

})






module.exports = router;
