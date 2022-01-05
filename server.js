// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;

const server = app.listen(port, () =>{
    console.log("Server is running, READY TO GO!!");
})

// Get request
app.get('/weatherData', (req, res) =>{
    console.log("Get request");
    res.send(projectData);
})

// Post Request
app.post('/weatherData', (req, res) =>{
    console.log("Post request");
    projectData = req.body;
    console.log(projectData);
    res.send("Express got Data!!");
})




















// app.post('/weatherData', (req, res) => {
//     projectData = req.body;
//     console.log(projectData);
//     res.send(projectData);
// })

// app.get('/data/2.5/weather?q=London&appid=' + apiKey, (req, res) =>{
//     console.log("Get Request!");
//     res.send(projectData);
// })