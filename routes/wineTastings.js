const express = require('express');
const router = express.Router();
const db = require('../models');
const methodOverride = require("method-override");
router.use(methodOverride("_method"));

router.delete("/:id", async (req, res) => {
    try {
      await db.wineTasting.destroy({
        where: {
          id: req.body.id
        },
      });
      res.redirect('/wine');
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
      res.redirect('/wine');
    } catch (error) {
      console.log("error");
    }
  });

router.get('/:id', (req,res) => {
    db.wineTasting.findOne({
        where:{id: req.params.id}
}).then((wineTasting) =>{
    res.render('wineTasting/show', {wineTasting : wineTasting} )
}).catch((error) =>{
    console.log(error)
})
})

module.exports = router;