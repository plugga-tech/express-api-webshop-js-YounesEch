var express = require('express');
var router = express.Router();
const fs= require("fs");
const crypto = require("crypto-js");
const { ObjectId } = require('mongodb');


//skapa en användare
//logga in användare
// data ska skickas till mongoDB
//koppla produkt till användare i kundkorg


router.get('/', function(req, res, next) {
  //hur döljer vi lösenord??
  req.app.locals.db.collection("users").find({},{projection:{password:0}}).toArray()
  .then(result => {
    console.log("resultat från get Users", result);
    res.json(result)
  })
});

/*******hämta specifik användare*******/
router.get('/:userId', function(req, res, next) {
  userId= req.params.userId;
  console.log(userId);
  req.app.locals.db.collection("users").findOne({"_id": new ObjectId(userId)})
  .then( result=> {
    console.log("hitta user", result); 
    res.json(result);
  })
})


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
  const {email, password} = req.body; 
  console.log(email, password);
  
  req.app.locals.db.collection("users").findOne({"email": email})
  .then(result => {
    res.json(result)
  })
})

  




module.exports = router;
