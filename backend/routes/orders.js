var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Product = require('../models/Order');


router.post('/add', (req, res) => {
    const user = req.body;
    console.log(user);

    req.app.locals.db.collection("orders").insertOne(user)
    .then(result=>{
        console.log("saved order", result);
        res.json(result);
    })
})

router.get('/all',function(req, res, next) {
    req.app.locals.db.collection("orders").find().toArray()
    .then(result=>{
        console.log("alla ordrar hämtade", result)
        res.json(result);
    })
})


module.exports = router;
