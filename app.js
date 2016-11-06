//init
var express = require('express');
var path = require('path');
var config = require(path.resolve('config'));
var app = express();
var router = require(path.resolve('router'));
//var cookieParser = require('cookie-parser');
//var session = require('express-session');
//app.use(cookieParser);
//app.use(session);
app.use("/bower_components",express.static("bower_components"));
app.use('/public',express.static("public"));
app.use("/",router);
app.listen(config.get("port"));
console.log("App listening in port "+config.get("port"));
