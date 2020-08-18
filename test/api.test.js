require('dotenv').config();
const fetch = require('node-fetch');
var API_KEY = process.env.API_KEY;

var request = require('request');

request({
  method: 'GET',
  url: 'https://api.globalwinescore.com/globalwinescores/latest/?',
  headers: {
    'Accept': 'application/json',
    'Authorization': API_KEY
  }}, function (error, response, body) {
  //console.log('Status:', response.statusCode);
  //console.log('Headers:', JSON.stringify(response.headers));
  let results = (response.body);
  let real = JSON.parse(results)
  console.log(real.results[0].wine);
});