require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./models/connection');  // ajouté par renaud

var indexRouter = require('./routes/index');
var bookingsRouter = require('./routes/bookings');
var tripsRouter = require('./routes/trips');  // ajouté par renaud
var tempsRouter = require('./routes/temps');  // ajouté par renaud


var app = express();

const cors = require('cors');  // ajouté par renaud
app.use(cors());  // ajouté par renaud


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/trips', tripsRouter);  // ajouté par renaud
app.use('/bookings', bookingsRouter);  // ajouté par renaud
app.use('/temps', tempsRouter);  // ajouté par renaud

module.exports = app;
