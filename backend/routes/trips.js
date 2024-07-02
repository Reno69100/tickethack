var express = require("express");
var router = express.Router();
var Trip = require('../models/trips');


  //retourner tous les elements du tableau qui match --> req.body = departure, arrival, date
  router.get("/", (req, res) => { 
     Trip.find().then(data => res.json({ trips: data}));
  })
  

  //supprimer un element du panier
  router.delete("/", (req, res) => { 
    Trip.deleteOne({_id: req.body.id}).then(() => res.json({result: true}));
  })
  
  
  module.exports = router;