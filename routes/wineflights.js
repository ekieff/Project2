const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {
    db.wineFlight.findAll({
    }).then((wineFlight) => {
    res.render('wineflights', {wineFlight: wineFlight})
    }).catch((error) => {
    console.log(error)
    })
})


module.exports = router;