'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function(req, res, next) {
    models.Todo.findAll().then(function(records){ 
    res.render('todo/index', {
            records: records
         });
      });
    });

    router.get('/new', function(req, res, next){
         res.render('todo/new');  

    });
 

    router.post('/' , function(req, res, next){
        //Creating a table to store all of the data
        models.Todo.create({  
        // Gather the information from html
            title: req.body.title,
            body: req.body.body
        //Gather all the data 
        }).then(function(record){
        //Post the information
            res.redirect(`/todo`);
        
        });
    });


    
    router.get('/:id', function(req, res, next){
       models.Todo.findByPk(req.params.id).then(function(record){
           res.render('todo/edit',{

              record : record
           });
           
       });
    });

    router.post('/:id', function(req, res, next){
        models.Todo.findByPk(req.params.id).then(function(record){
            record.update({
                title: req.body.title,
                body: req.body.body
            }).then(function(record){
                 res.redirect('/todo');

                 })
            })
        });
 
     
module.exports = router;