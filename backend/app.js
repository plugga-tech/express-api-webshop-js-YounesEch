var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let productsRouter = require('./routes/products');


const MongoClient = require("mongodb").MongoClient;

var app = express();

app.use(cors());

require("dotenv").config();

MongoClient.connect(process.env.MONGODB_URI) //connectar till mongodb. promise kedjan till fetch och connect kan man skriva såhär. till async skriv vanligt sätt. 
.then(client =>{
    console.log("databasen är okej");

    const db = client.db("Younes-Echelhi")  //databas dit man sparar variabeln. 
    app.locals.db = db;   //skapat en kontakt och sparat den i den globala scoppets minne i express.
})
.catch(err => console.log("err", err))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter)

module.exports = app;
