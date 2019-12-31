const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId; //check id is valid or not

var { Employee } = require('../models/employee');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

//READ
router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id :${req.params.id}`);

    Employee.findById(req.params.id,(err,doc)=>{
        if(!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :'+ JSON.stringify(err,undefined,2));}
    });
});

//CREATE
router.post('/',(req,res)=>{
    var emp = new Employee({
        categories : req.body.categories,
        item : req.body.item,
        quntity:req.body.quntity,
        price:req.body.price,
    })
    emp.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in Employee Save :'+JSON.stringify(err,undefined,2))}
    });
});

//UPDATE
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id :${req.params.id}`);

    var emp = {
        categories : req.body.categories,
        item : req.body.item,
        quntity:req.body.quntity,
        price:req.body.price,
    };
    Employee.findByIdAndUpdate(re.params.id,{$set:emp},{new : true},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else
        {
            console.log('error in Employee Update:'+JSON.stringify(err,undefined,2));
        }
    });
});

//DELETE 
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id :${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else
        {
            console.log('error in Employee Update:'+JSON.stringify(err,undefined,2));
        }
    });
 
    });

module.exports = router;