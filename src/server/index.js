const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const fetch = require('node-fetch')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


//WON'T USE THIS CAUSE WE ARE USING MEANING CLOUD NOT AYLIEN
//var textapi = new aylien({
//   application_key: process.env.API_KEY
//});

const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = "?key=" + process.env.API_KEY;
const textHolder = "&lang=en&of=json&txt=" //"&lang=auto" + "&ilang=en" + "&txt=";
let userInput = []
//Here is the base I used: baseURL + apiKey + '&lang=auto' + '&ilang=en' + input


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.post('/test', async (req, res) => {
	userInput = req.body.url;
	
	console.log(process.env.API_KEY);
	
	userInput.agreement = req.body.agreement;
	userInput.subjectivity = req.body.subjectivity;
	userInput.confidence = req.body.confidence;
	userInput.irony = req.body.irony;
	
	console.log(userInput);
	console.log(baseUrl+apiKey+textHolder+userInput);
	const response = await fetch (baseUrl+apiKey+textHolder+userInput);
	const meaningCloudData = await response.json();
	console.log(meaningCloudData);
	res.json(meaningCloudData);
})


