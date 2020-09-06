require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const SECRET_SESSION = process.env.SECRET_SESSION;
const passport = require('./config/ppConfig');
const flash = require('connect-flash');

//require the authroization middleware at the top of the page
const isLoggedIn = require('./middleware/isLoggedIn');
const db = require('./models');
var API_KEY = process.env.API_KEY;
var rp = require('request-promise');


app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

// secret: what we actually giving the client to use our site/session cookie
// resave: Save the session even if it's modified, make this false
// saveUninitialized: if we have a new session, we'll save it, therefore,
// setting this to true

app.use(session({
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}))

// initialize passport and run session as middleware
app.use(passport.initialize());
app.use(passport.session());

//flash for temporary messages to the user (like error messages)
app.use(flash());

//middleware to have our messages accessible for every view
app.use((req, res, next) =>{
  //before every route we will attach our user to res.local
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', (req, res) => {
  res.render('index', { alert: res.locals.alerts });
});

app.get('/profile', isLoggedIn, (req, res) => {  
    db.wineTasting.findAll({
            where: { userId: req.user.id }
          }).then((wineTasting) => {
            let user = req.user
              console.log(wineTasting)
              res.render('./users/profile', { wineTasting: wineTasting, user:user})
          })
    })

app.use('/auth', require('./routes/auth'));
app.use('/wine', require('./routes/wines'));
app.use('/wineTasting', require('./routes/wineTastings'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${port} 🎧`);
});

module.exports = server;
