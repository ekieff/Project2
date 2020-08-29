require('dotenv').config();
const fetch = require('node-fetch');
var API_KEY = process.env.API_KEY;

var request = require('request');
const db = require('../models');

let real= "";

request({
  method: 'GET',
  url: 'https://api.globalwinescore.com/globalwinescores/latest?limit=50',
  headers: {
    'Accept': 'application/json',
    'Authorization': API_KEY
  }}, function (error, response, body) {
  let results = JSON.parse(response.body);
  console.log(results)
});

// request({
//     method: 'GET',
//     url: 'https://api.globalwinescore.com/globalwinescores/latest/?wine_id=113422',
//     headers: {
//       'Accept': 'application/json',
//       'Authorization': API_KEY
//     }}, function (error, response, body) {
//     let results = JSON.parse(response.body);
//     real = results.results[0];
//     console.log(real.wine);
//     db.wine.findOrCreate({
//       where: {
//       wine:real.wine,
//       color:real.color,
//       country:real.country,
//       region:real.regions[0],
//       appelation:real.appellation,
//       vintage:real.vintage
//       }
//     })
//   });
//   request({
//     method: 'GET',
//     url: 'https://api.globalwinescore.com/globalwinescores/latest/?wine_id=111473',
//     headers: {
//       'Accept': 'application/json',
//       'Authorization': API_KEY
//     }}, function (error, response, body) {
//     let results = JSON.parse(response.body);
//     real = results.results[0];
//     console.log(real.wine);
//     db.wine.findOrCreate({
//       where: {
//       wine:real.wine,
//       color:real.color,
//       country:real.country,
//       region:real.regions[0],
//       appelation:real.appellation,
//       vintage:real.vintage
//       }
//     })
//   });
//   request({
//     method: 'GET',
//     url: 'https://api.globalwinescore.com/globalwinescores/latest/?wine_id=95564',
//     headers: {
//       'Accept': 'application/json',
//       'Authorization': API_KEY
//     }}, function (error, response, body) {
//     let results = JSON.parse(response.body);
//     real = results.results[0];
//     console.log(real.wine);
//     db.wine.findOrCreate({
//       where: {
//       wine:real.wine,
//       color:real.color,
//       country:real.country,
//       region:real.regions[0],
//       appelation:real.appellation,
//       vintage:real.vintage
//       }
//     })
//   });

//   request({
//     method: 'GET',
//     url: 'https://api.globalwinescore.com/globalwinescores/latest/?wine_id=819',
//     headers: {
//       'Accept': 'application/json',
//       'Authorization': API_KEY
//     }}, function (error, response, body) {
//     let results = JSON.parse(response.body);
//     real = results.results[0];
//     console.log(real.wine);
//     db.wine.findOrCreate({
//       where: {
//       wine:real.wine,
//       color:real.color,
//       country:real.country,
//       region:real.regions[0],
//       appelation:real.appellation,
//       vintage:real.vintage
//       }
//     })
//   });
//   request({
//     method: 'GET',
//     url: 'https://api.globalwinescore.com/globalwinescores/latest/?wine_id=54344',
//     headers: {
//       'Accept': 'application/json',
//       'Authorization': API_KEY
//     }}, function (error, response, body) {
//     let results = JSON.parse(response.body);
//     real = results.results[0];
//     console.log(real.wine);
//     db.wine.findOrCreate({
//       where: {
//       wine:real.wine,
//       color:real.color,
//       country:real.country,
//       region:real.regions[0],
//       appelation:real.appellation,
//       vintage:real.vintage
//       }
//     })
//   });