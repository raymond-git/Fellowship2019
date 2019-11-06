'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');


router.get('/Home', function(req, res, next) {
  res.render('index');
});

router.get('/school', function(req, res, next) {
  console.log(req.query);
  res.render('school', {name: req.body.name, 
                        lastname: req.body.lastname});
});
router.post('/school2', function(req, res, next) {
  console.log(req.body);
  res.render('school', {name: req.body.name, 
                        lastname: req.body.lastname});

});

router.post('/school3', function(req, res, next) {
  console.log(req.body);
  res.render('school', {name: req.body.name, 
                        lastname: req.body.lastname});
  });

  

  

router.get('/logout', function(req,res,next){
  req.logout();
  req.flash('info', 'You have been logged out.');
  res.redirect('/');
});



module.exports = router;
