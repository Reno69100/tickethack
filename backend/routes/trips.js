var express = require("express");
var router = express.Router();
var Trip = require('../models/trips');
var Temp = require('../models/temps');


  //retourner tous les elements de la collection
  router.get("/", (req, res) => { 
     Trip.find().then(data => res.json({ trips: data}));
  });

  //créer un document dans la collection trips
  //  router.post("/", (req, res) => { 
  //    let formatedDate = moment(req.body.date)  //  <-------------------convertion string en date
  //    Trip.find({departure:req.body.departure, arrival:req.body.arrival, date:formatedDate, price:req.body.price}).then(dbdata =>{
  //     console.log(dbdata)
  //     if(!dbdata){
  //       let newTrip = new Temp({  
  //         departure: req.body.departure,
  //         arrival: req.body.arrival,
  //         date: formatedDate,
  //         price: req.body.price,
  //       });
  //       newTrip.save().then({
  //         console.log(newTrip)
  //         res.json({result:true})
  //       });
  //       res.json({result:true})    //,newTripInCart:newTrip})
  //     }else{
  //       res.json({result:false})   //,'trip already in cart'})
  //     }
  //    });
  //  });
  

  //supprimer un element du panier
  router.delete("/", (req, res) => { 
    Trip.deleteOne({_id: req.body.id}).then(() => res.json({result: true}));
  })
  
  
  module.exports = router;
