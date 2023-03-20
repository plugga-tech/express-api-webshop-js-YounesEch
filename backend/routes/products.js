var express = require('express');
var router = express.Router();
const fs= require("fs");
const crypto = require("crypto-js");

//10 producter
//ska gå och köpa product (lägga till i varukorgen)
//lagervärdet i databasen ska minskas när man skickar iväg en order.
//info om producterna ska displyas, namn, bild och pris. 

let clothes = [
    {id:1, name:"Versace", pris:200},
    {id:2, name:"Armani", pris:300},
    {id:3, name:"Dior", pris:400},
    {id:4, name:"Boss", pris:200},
    {id:5, name:"Sail Racing", pris:800},
    {id:6, name:"Parajumpers", pris:400},
    {id:7, name:"Stone Island", pris:900},
    {id:8, name:"Moshino", pris:1000},
    {id:9, name:"Dsquared", pris:100},
    {id:10, name:"Mosse", pris:750}
  ]

router.get('/', function(req, res, next) {
    res.json(clothes);
})






module.exports = router;
