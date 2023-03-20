var express = require('express');
var router = express.Router();
const fs= require("fs");
const crypto = require("crypto-js");
const { url } = require('inspector');

//10 producter
//ska gå och köpa product (lägga till i varukorgen)
//lagervärdet i databasen ska minskas när man skickar iväg en order.
//info om producterna ska displyas, namn, bild och pris. 

let clothes = [
    {id:1, name:"Versace", price:200,},
    {id:2, name:"Armani", price:300},
    {id:3, name:"Dior", price:400},
    {id:4, name:"Boss", price:200},
    {id:5, name:"Sail Racing", price:800},
    {id:6, name:"Parajumpers", price:400},
    {id:7, name:"Stone Island", price:900},
    {id:8, name:"Moshino", price:1000},
    {id:9, name:"Dsquared", price:100},
    {id:10, name:"Mosse", price:750}
  ]

router.get('/', function(req, res, next) {
    res.json(clothes);
})







module.exports = router;
