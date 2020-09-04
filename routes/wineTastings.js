const express = require('express');
const router = express.Router();
const db = require('../models');
const methodOverride = require("method-override");
router.use(methodOverride("_method"));
var API_KEY = process.env.API_KEY;
var rp = require('request-promise');


router.delete("/:id", async (req, res) => {
    try {
      await db.wineTasting.destroy({
        where: {
          id: req.body.id
        },
      });
      res.redirect(`/wine/${req.body.wineAPIId}`);
    } catch (error) {
      console.log("error");
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      await db.wineTasting.update(
        {notes: req.body.name},
        {where: {id: req.params.id}}
      );
      res.redirect(`/wine/${req.body.wineAPIId}`);
    } catch (error) {
      console.log("error");
    }
  });

router.get('/:id/:winename', (req,res) => { 
  db.wineTasting.findOne({
        where:{id: req.params.id}
}).then((wineTasting) =>{
  let user = req.user.id
  let wine = req.params.winename
  console.log("HERESE A WINE LOOJ AT THIS WINE", wine)
  res.render('wineTasting/show', {wineTasting : wineTasting, user: user, wine:wine } )
  console.log(user)
}).catch((error) =>{
    console.log(error)
})
})

router.post('/:id', (req, res) =>{
  db.wineTasting.create({
      userId: req.user.id,
      notes: req.body.notes,
      wineAPIId: req.body.wineAPIId,
  })
  .then((wineTasting) => {
      console.log(wineTasting)
      res.redirect(`/wine/${req.body.wineAPIId}`)
  }).catch((error) =>{
      console.log(error)
  })
})

module.exports = router;