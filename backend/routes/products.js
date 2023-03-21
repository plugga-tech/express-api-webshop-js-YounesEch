var express = require('express');
var router = express.Router();
const fs= require("fs");
const crypto = require("crypto-js");
const { url } = require('inspector');

//10 producter
//ska gå och köpa product (lägga till i varukorgen)
//lagervärdet i databasen ska minskas när man skickar iväg en order.
//info om producterna ska displyas, namn, bild och pris. 

/***********hämta alla produkter*******/
router.get('/', function(req, res, next) {
    req.app.locals.db.collection("products").find().toArray()
  .then(result => {
    console.log("resultat från produkterna  ", result);
    res.json(result)
  })
});



/***********skapa produkter**********/
router.post('/add', function(req, res, next) {  
  let newProduct = {name: req.body.name};
  let description = req.body.description;
  let price = req.body.price;
  let lager = req.body.lager;
  newProduct.description = description;
  newProduct.price = price;
  newProduct.lager= lager;
  console.log("ny produkt", newProduct);

  req.app.locals.db.collection("products").insertOne(newProduct)
  .then(result =>{
    console.log("result från db", result);
    res.json(result);
  })
})





module.exports = router;
