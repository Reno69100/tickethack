var express = require("express");
var router = express.Router();
var Trip = require('../models/trips');








  //retourner tous les elements du tableau qui match --> req.body = departure, arrival, date
  router.get("/", (req, res) => { 
     Trip.find().then(data => res.json({ trips:data }) );
  })
  
  /*
  router.get("/:cityName", (req, res) => {
    const searchedWeather = weather.find( X => X.cityName.toLowerCase() === req.params.cityName.toLowerCase()
    );
    if (searchedWeather) {
      res.json({ result: true, weather: searchedWeather });
    } else {
      res.json({ result: false, error: "City not found" });
    }
  });
  */
  
  module.exports = router;





