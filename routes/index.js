'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');


router.get('/Home', function(req, res, next) {
  models.Post.findAll().then(function(records){  // findAll() is a function that finds all the data and send it back.
                          // It will take sometime, maybe not now but we'll have all the data for sure
                          // then(function(records) means once have the data fetch the data to me
  res.render('index',{
    records:records
         });
      });
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
