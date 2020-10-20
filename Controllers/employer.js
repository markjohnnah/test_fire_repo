const express = require('express')
const router = express.Router()
const path = require('path') 
const data = require('../data/employerdata')

router.get('/', function (req, res) {
    let emppath = path.join(__dirname, "../views/employer.html");  
    res.sendFile(emppath);
  });
  
  
  // job location api endpoint
  router.get('/api', function (req, res) {
     let emp = data.employer;  
     console.log(emp)
    res.send(emp);
  });

  module.exports = router	