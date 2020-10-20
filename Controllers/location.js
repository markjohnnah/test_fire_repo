const express = require('express')
const router = express.Router()
const path = require('path') 
const data = require('../data/locationdata')

router.get("/", function (req, res) {
    let locpath = path.join(__dirname, "../views/location.html");  
    res.sendFile(locpath);
  });
  
  
  // job location api endpoint
  router.get('/api', function (req, res) {
     let locations = data.location;  
     console.log(data.location);
    res.send(locations);
  });

  module.exports = router	