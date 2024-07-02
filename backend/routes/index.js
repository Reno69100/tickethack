var express = require('express');
var router = express.Router();
var arrData = require('../trips')
var Trip = require('../models/trips')
var moment = require('moment')

//, date:req.body.date
//{ field: { $gte: value } }
router.get("/search/:departure/:arrival/:date", (req, res) => { 
  let formatedDate = moment(req.params.date)
  let dateSuiv = formatedDate.add(1,"days")
  Trip.find({ departure:req.params.departure, arrival:req.params.arrival,  date: { $gte: req.params.date }, date: { $lte: dateSuiv }  }).then(dbdata =>{
    let newTab = []
    for (let element of dbdata) {
      let heure = element.date.toString().substring(16,21)
      element.data = heure
      newTab.push({departure: element.departure, arrival: element.arrival, date: heure, price: element.price})
    }
    
    res.json({trips:newTab})
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
