var express = require('express');
var router = express.Router();
var arrData = require('../trips')

/* GET home page. 
router.get('/', function(req, res, next) { 
  console.log(rep.json)
  res.render({requete:req.body});
});*/

router.get("/search", (req, res) => { 
  
  res.json({trips:arrData})
  console.log(arrData)
});


module.exports = router;
