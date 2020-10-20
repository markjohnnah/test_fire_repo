const express = require('express')
const router = express.Router()
const path = require('path') 
const data = require('../data/jodata')

router.get('/', function (req, res) {
    let jobpath = path.join(__dirname, '../views/job/job_list.html');    
    res.sendFile(jobpath);
  });

  router.get('/list', function (req, res) {
    let joblistpath = path.join(__dirname, '../views/index.html');  
    res.sendFile(joblistpath);
  });
  
  router.get("/new", function (req, res) {
    let newjobpath = path.join(__dirname, "../views/job/create.html");    
    res.sendFile(newjobpath);
  })

  //handle post
  router.post('/add-new-job', function(res,req) {
    console.log("Job POST route hit")
    console.log(req.body)
    console.log(req.body.description)

    jobObject = {
        title: req.body.position,
        description: req.body.description,
        employer: req.body.company
        
    }
    
    data.jobvacancy.push(jobObject)
    console.log(data.jobvacancy)

  });

  //job list api endpoint
router.get("/api", function (req, res) { 
  console.log(data.jobvacancy);
  res.send(data.jobvacancy);
});


module.exports = router	