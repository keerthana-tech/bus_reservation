var BusModel = require("../models/busModel");
var ObjectID = require('mongoose').Types.ObjectId;

exports.insert= (req,res) =>{
    
    const bus = new BusModel({
        name:req.body.name,
        source:req.body.source,
        destination:req.body.destination
    })

    
    console.log(bus)

    bus.save((err,docs)=>{
        if(!err) res.status(201).send(docs);
        else res.status(500).send(err);
    })
}

exports.display = (req,res) =>{
    BusModel.find((err,docs)=>{
        if(!err) res.send(docs)
        else res.status(500).send(err);
    })
}

