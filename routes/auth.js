const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig')
const flash = require('connect-flash');

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});
router.get('/login', (req, res) => {
  res.render('auth/login');
});
router.post('/signup', (req, res) => {
  console.log(req.body);
  db.user.findOrCreate({
    where: {email: req.body.email},
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  })
  .then(([user, created]) => {
    if (created) {
      // if created, success
      console.log(`${user.name} was created`);
      // Flash message
      passport.authenticate('local', {
        successRedirect: '/',
        //flash works in authenticate this way
        successFlash: 'Account created and logging in'
      })(req, res);
      // Before passport.authenticate
      res.redirect('/');
    } else {
      // email already exists
      console.log('Email already exists');
      //flash outside of authenticate works like this.
      req.flash('Email alread exists, please check your email');
      res.redirect('/auth/signup');
    }
  })
  .catch(err => {
    console.log('Error', err);
    req.flash(`Error, unfortunately... ${error}`);
    res.redirect('/auth/signup');
  })
});
//flash message
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  successFlash: 'Welcome back.',
  failureFlash: 'Either email or password is incorrect. Please try again.'
}));
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
  req.flash('See you soon, logging out')
});
module.exports = router;