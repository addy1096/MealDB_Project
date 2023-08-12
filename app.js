




///-------------------------------------------------EXPRESS----------------

const express = require("express");
const path = require("path");
const appEx = express();
const port = 4200;
let bodyParser = require('body-parser')

appEx.use(express.static(__dirname));
appEx.use(bodyParser.json());

appEx.get('/', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(__dirname + '/loginpage.html');
  })


appEx.get('/landingpage', (req, res) => {
    res.sendFile(__dirname + '/landingpage.html');
  })

  appEx.get('/edit', (req, res) => {
    res.sendFile(__dirname + '/edit.html');
  })

  appEx.get('/contactus', (req, res) => {
    res.sendFile(__dirname + '/contactus.html');
  })
  appEx.get('/aboutus', (req, res) => {
    res.sendFile(__dirname + '/aboutus.html');
  })

  appEx.post('/submitForm', (req,res) => {
    
    res.status(200).send('Success');
  })

// app.use(express.static)

appEx.listen(port);