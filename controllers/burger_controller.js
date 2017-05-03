// this is creatinf the mysql database page and sending the router

var express = require("express");

var bodyParser = require("body-parser");
var router = express.Router();

// var methodOverride = require("method-override");

router.get('/', function(req,res){
  res.redirect('/burgers')
});
// READ
// GRAB ALL FROM EVENTS, THEN SEND DATA TO BROWSER
router.get('/burgers', function(req,res){
  Burgers.findAll()
  then(function(burger_s){
    return res.render('index', {burger_s})
  });
});

// create the burger name and devoured status, then redirect
router.post('/burgers/create', function(req,res){
  Burgers.create({
    name: req.body.burger_name,
    devoured: req.body.devoured
  })
  .then (function(){
    res.redirects('burgers')
  });
});

// update devoured where id= req.params.id tje redirect to burgers
router.put('/burgers/update/:id', function(req,res){
  Burgers.update(
  {
    devoured: req.body.devoured
  }, {
  where: {id:req.params.id}
  })
  .then(function(){
    res.redirect('/burgers');
  });
});


// export routes for server.js to USE 
module.exports = router;