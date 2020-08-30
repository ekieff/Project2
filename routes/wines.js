const express = require('express');
const router = express.Router();
const db = require('../models');
var API_KEY = process.env.API_KEY;
var rp = require('request-promise');

var fetch = require("node-fetch");
const { response } = require('express');

router.get('/', (req, res, next) => {
    rp({
        method: 'GET',
        url: 'https://api.globalwinescore.com/globalwinescores/latest?limit=10',
        headers: {
          'Accept': 'application/json',
          'Authorization': API_KEY
        },
        json:true
    })
      .then((response) => {
    res.render('./wine/wine', {wine: response.results})
    }).catch((error) => {
    console.log(error)
    })
})

router.post('/', (req, res) =>{
    db.wineTasting.create({
        userId: req.user.id,
        notes: req.body.notes,
        wineAPIId: req.body.wineAPIId
    })
    .then((wineTasting) => {
        console.log(wineTasting)
        res.redirect('/wine')
    }).catch((error) =>{
        console.log(error)
    })
})

router.get('/:id', (req, res) => {
    rp({
        method: 'GET',
        url: 'https://api.globalwinescore.com/globalwinescores/latest/?wine_id='+ req.params.id,
        headers: {
          'Accept': 'application/json',
          'Authorization': API_KEY
        },
        json:true
    })
    .then((results) => {
        db.wineTasting.findAll({
            where: { wineAPIId: req.params.id }
          }).then((wineTasting) => {
              console.log(wineTasting)
              res.render('wine/show', { wine: results.results[0], wineTasting: wineTasting})
          })
    })
    .catch((error) => {
      console.log(error)
    })
  })

  router.delete('/:id', (req, res) =>{
    db.wineTasting.destroy({
        where: {id:res.body.tastingId}
    }).then(() =>{
        res.redirect('/wine')
    }).catch((error) =>{
        console.log(error)
    })
})

module.exports = router;