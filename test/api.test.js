require('dotenv').config();
const fetch = require('node-fetch');
var API_KEY = process.env.API_KEY;

var request = require('request');
const db = require('../models');

let real= "";

request({
  method: 'GET',
  url: 'https://api.globalwinescore.com/globalwinescores/latest/?wine_id=28754',
  headers: {
    'Accept': 'application/json',
    'Authorization': API_KEY
  }}, function (error, response, body) {
  //console.log('Status:', response.statusCode);
  //console.log('Headers:', JSON.stringify(response.headers));
  let results = JSON.parse(response.body);
  real = results.results[0];
  console.log(real.wine);
  db.wine.findOrCreate({
    where: {
    wine:real.wine,
    color:real.color,
    country:real.country,
    region:real.regions[0],
    appelation:real.appellation,
    vintage:real.vintage
    }
  })
});
// console.log(real.wine);
//  db.wine.findOrCreate({
//    where: {
//    wine:real.wine,
//    color:real.color,
//    country:real.country,
//    region:real.regions,
//    appelation:real.appellation,
//    vintage:real.vintage
//    }
//  })