var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');
//require modules
var encryptionLib = require('../../modules/encryption');
var connection = require('../../modules/connection');

console.log("register.js page");

router.get('/register', function(req, res) {
  var file = req.params[0] || "/views/register.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});
//
// router.post('/register', function(req, res) {
//   console.log(req.body);
//   console.log('username = ', req.body.username);
//   console.log('password = ', req.body.password);

//   //connect to the database!!
//   pg.connect(connection, function (err, client, done) {
// //
// //     var userToSave = {
// //       username: req.body.username,
// //       password: encryptionLib.encryptPassword(req.body.password)
// //     };
// //
//     client.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id",
// //      [req.body.username, userToSave.password],
// //       function(err, result) {
// //         done();
// //
// //         if(err){
// //           console.log(err);
// //           res.sendStatus(500);
// //         }else{
// //           // console.log(result);
// //           console.log('success', result.rows[0].id);
// //           res.redirect('/');
// //         }
// //     });
//   });
// });

module.exports = router;
