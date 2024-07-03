var express = require("express");
var router = express.Router();
var Booking = require('../models/bookings');
var Temp = require('../models/temps');


// const --> tableau pour test POST



router.get('/purchase',(req, res) =>{
  Temp.find().then(data =>{
    for (let element of data ){                        // ------> req.body.purchase -->  verifier le type et contennu de req.body
      let newTrip = new Booking({ 
         departure: element.departure,
         arrival: element.arrival,
         date: element.date,
         price: element.price,
  })
      newTrip.save().then(console.log(newTrip))  
    }     
    Temp.deleteMany().then(console.log('panier vidé'))
    res.json({result:true})
  })
})

router.get('/',(req, res) =>{
  Booking.find().then(data =>res.json({bookings: data}))

})

    // router.post('/',(req, res) =>{
    //   let newTrip = new Temp({  
    //     departure: req.body.departure,
    //     arrival: req.body.arrival,
    //     date: req.body.date,
    //     price: req.body.price,
    //   });
    //   newTrip.save().then(res.json({result:true}))
    // })



  
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