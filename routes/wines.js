const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {
    db.wine.findAll({
    }).then((wine) => {
    res.render('wine', {wine: wine})
    }).catch((error) => {
    console.log(error)
    })
})

// app.get('/profile', isLoggedIn, (req, res) => {
//     db.wineFlight.findAll({
//       where: {userId: 1}
//     }).then((wineFlight) => {
//       res.render('profile', { wineFlight: wineFlight }); 
//     }).catch((error) => {
//       console.log(error)
//     })
//   });
module.exports = router;