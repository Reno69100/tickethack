var express = require('express');
var router = express.Router();
var arrData = require('../trips')
var Trip = require('../models/trips')
var moment = require('moment')

// retourner tous les docs de la collection 'trips' qui match : depart, arrivée, date
// { field: { $gte: value } }
//.toLowerCase()
router.get("/search/:departure/:arrival/:date", (req, res) => { 
  let formatedDate = moment(req.params.date)
  let dateSuiv = formatedDate.add(1,"days")
  let formatedDeparture = req.params.departure.toLowerCase()
  formatedDeparture = formatedDeparture[0].toUpperCase() + formatedDeparture.slice(1)

  let formatedArrivale = req.params.arrival.toLowerCase()
  formatedArrivale = formatedArrivale[0].toUpperCase() + formatedArrivale.slice(1)
  console.log(req.params.date, dateSuiv.format())
  Trip.find({ departure:formatedDeparture, arrival:formatedArrivale,  date: {$gte: req.params.date, $lte: dateSuiv.format()}  }).then(dbdata => {        //{ departure:req.params.departure.toLowerCase(), arrival:req.params.arrival.toLowerCase(),  date: { $gte: req.params.date }, date: { $lte: dateSuiv }  }
    //console.log(dbdata)
    res.json({trips:dbdata})
  })
});

module.exports = router;

// extrait du tableau
  //[{"departure":"Paris","arrival":"Bruxelles","date":{"$date":"2024-07-02T08:04:41.060Z"},"price":52},{"departure":"Bruxelles","arrival":"Marseille","date":{"$date":"2024-07-02T08:05:20.397Z"},"price":68},


  /* GET home page. 
router.get('/', function(req, res, next) { 
  console.log(rep.json)
  res.render({requete:req.body});
});*/

  // for (var element of arrData){
  //   let newTrip = new Trip({  
  //     departure: element.departure,
  //     arrival: element.arrival,
  //     date: element.date.$date,
  //     price: element.price,
  //   })
  //   newTrip.save().then(console.log(newTrip))
  // }
