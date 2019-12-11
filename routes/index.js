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


router.get('/posts' , function(req, res, next){    
  models.Post.findByPk(req.query.id).then(function(record){
  res.render('post', {record:record})

      });
});


router.get('/form', function(req, res, next){
  res.render('form');
});

//We using router.post because we are sending the data, we are submitting data in the form
router.post('/form', function(req, res, next){ 
    models.Post.create({
    
    title: req.body.title,
    full_text: req.body.full_text,
    from: req.body.from,
    media_url: req.body.media_url,

   }).then(function(record){
      res.redirect(`/posts?id=${record.id}`)
  });

});


  //res.render('form', {
    //req.body.title is requesting the body from the /form link page(*HTML)
     //   title: req.body.title, 
     //   from: req.body.from,
     //   full_text: req.body.full_text,
     //   media_url: req.body.media_url,
  






module.exports = router;
