const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {
    db.wine.findAll({
    }).then((wine) => {
    res.render('./wine/wine', {wine: wine})
    }).catch((error) => {
    console.log(error)
    })
})

router.post('/', (req, res) =>{
    db.wineTasting.create({
        userId: req.user.id,
        notes: req.body.notes,
        wineId: req.body.wineId
    })
    .then((wineTasting) => {
        console.log(wineTasting)
        res.redirect('/')
    }).catch((error) =>{
        console.log(error)
    })
})

router.get('/:id', (req, res) => {
    db.wine.findOne({
      where: { id: req.params.id },
      include: [db.wineTasting]
    })
    .then((wine) => {
      if (!wine) throw Error()
      res.render('wine/show', { wine: wine, wineTasting: wine.wineTasting })
      console.log(wine.wineTastings)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  router.delete('/:id', (req, res) =>{
    db.wineTasting.destroy({
        where: {id:res.body.tastingId}
    }).then(() =>{
        res.redirect('')
    }).catch((error) =>{
        console.log(error)
    })
})

module.exports = router;