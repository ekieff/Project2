require('dotenv').config();
const fetch = require('node-fetch');
var API_KEY = process.env.API_KEY;

var request = require('request');
console.log(API_KEY);

request({
  method: 'GET',
  url: 'https://api.globalwinescore.com/globalwinescores/latest/?wine_id=61624',
  headers: {
    'Accept': 'application/json',
    'Authorization': API_KEY
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});