var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');

router.post('/', passport.authenticate('local',
  {
    successRedirect: '/views/index.html',
    failureRedirect: '/views/register.html'
  }
));

router.get('/', function(req, res) {
console.log( 'fghj');
  res.sendFile(path.resolve('public/views/login.html'));
});

module.exports = router;
