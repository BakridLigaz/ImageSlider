var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var database = require(path.resolve('db/database'));
var router = express.Router();
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('index.html'));
});
/*REST Service*/
router.get("/users",function(req,res,next){
  database.getUsers(req,res);
});
router.get("/user/:id",function(req,res){
  database.getUser(req,res);
});

router.post("/user/",function(req,res){
  database.addUser(req,res);
});

router.put("/user/",function(req,res){
  database.updateUser(req,res);
});

router.delete("/user/:id",function(req,res){
  database.deleteUser(req,res);
});

module.exports = router;
