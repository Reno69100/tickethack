var express = require("express");
var router = express.Router();
var Booking = require('../models/bookings');

  
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