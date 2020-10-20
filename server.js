//imports & require
const express = require('express')
const multer = require('multer');

const jobRouter = require('./Controllers/job')
const locationRouter = require('./Controllers/location')
const employerRouter = require('./Controllers/employer')

const path = require('path') 
const cors = require('cors')
const data = require('./data/contactdata')


const port = 3000

//use & initialization
const app = express()
const upload = multer();
//fronted files served from the public folder  --- FRONTEND
app.use(express.static('public'))
app.use(cors())
app.use(upload.array()); 
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  
app.get("/", function (req, res) {
  let aboutpath = path.join(__dirname, "./views/index.html");
  
  res.sendFile(aboutpath);
});
app.get("/about", function (req, res) {
  let aboutpath = path.join(__dirname, "./views/about.html");
  
  res.sendFile(aboutpath);
});

app.get("/about/about", function (req, res) {
  let about2path = path.join(__dirname, "about/about.html");
  
  res.sendFile(about2path);
});

app.get("/contact", function (req, res) {
  let contactpath = path.join(__dirname, "./views/contact.html");
  
  res.sendFile(contactpath);
});

//job routes /api

app.use('/job', jobRouter );

//location routes /api

app.use('/location', locationRouter );

//employer routes
app.use('/employer', employerRouter);

//contact data endpoint
app.get("/contactendpoint", function (req, res) {  
  console.log(data.contact);  
  res.send(data.contact);
});

//form post handling
app.post('/form-handling', function(req, res) {
    console.log(req.body)
    let email = req.body.user_email
    let sendername = req.body.user_name 
res.send(` <br> <br> Thank you, ${sendername} !, I'll respond back on your email: ${email}
 <br> <br> <hr> <a href="/"><b>Home</b></a> | <a href="/contact"><b>Back</b></a>`)
})

//calling http server to listen on port declared port
app.listen(port, () => {
    console.log(`Job listing app listening at http://localhost:${port}`)
})