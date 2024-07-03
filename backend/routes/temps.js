var express = require("express");
var router = express.Router();
var Temp = require('../models/temps');

//route POST/ pour creer nouveau doc dans collection temps  
router.post('/',(req, res) =>{
  let newTrip = new Temp({  
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: req.body.date,
    price: req.body.price,
  });
  newTrip.save().then(res.json({result:true}))
})

//route get find() sur temps
router.get('/',(req, res) =>{
  Temp.find().then(data => res.json({cart:data}))
})

//route DELETE pour supprimer un doc de la collection temps
router.delete('/',(req, res) =>{
  console.log(req.body._id)
  Temp.deleteOne({_id:req.body.id}).then( res.json({result:true}))   //_id:req.body._id
})









  /*
  router.get("/", (req, res) => {
    res.json({ weather });
  });
  */
  
  /*
  router.get("/:cityName", (req, res) => {
    const searchedWeather = weather.find(
      X => X.cityName.toLowerCase() === req.params.cityName.toLowerCase()
    );
    if (searchedWeather) {
      res.json({ result: true, weather: searchedWeather });
    } else {
      res.json({ result: false, error: "City not found" });
    }
  });
  */
  
  module.exports = router;