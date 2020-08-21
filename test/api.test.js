require('dotenv').config();
const fetch = require('node-fetch');
var API_KEY = process.env.API_KEY;

var request = require('request');
const db = require('../models');
const wineflight = require('../models/wineflight');

let real= "";

// request({
//   method: 'GET',
//   url: 'https://api.globalwinescore.com/globalwinescores/latest/?wine_id=28754',
//   headers: {
//     'Accept': 'application/json',
//     'Authorization': API_KEY
//   }}, function (error, response, body) {
//   let results = JSON.parse(response.body);
//   real = results.results[0];
//   console.log(real.wine);
//   db.wine.findOrCreate({
//     where: {
//     wine:real.wine,
//     color:real.color,
//     country:real.country,
//     region:real.regions[0],
//     appelation:real.appellation,
//     vintage:real.vintage
//     }
//   })
// });
db.wineFlight.findOrCreate({
  where: {
    name:'Basic Red Wines',
    userId:1
  }
})
db.wineFlightWines.bulkCreate([
  { wineFlightId:1, wineId:1},
  { wineFlightId:1, wineId:2},
  { wineFlightId:1, wineId:3},
  { wineFlightId:1, wineId:4},
  { wineFlightId:1, wineId:5},
  { wineFlightId:1, wineId:6}
])
// db.wineTasting.findOrCreate({
//   where: {
//     userId:1,
//     wineId:1,
//     notes:'plum'
//   }
// })
// db.wineFlightWines.findOrCreate({
//   where:{
//     wineId:1,
//     wineFlights:1
//   }
// })