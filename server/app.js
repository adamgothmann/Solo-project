var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var pg = require('pg');
// var connectionString = 'postgres://localhost:5432/solo_project';
var connection = require('../modules/connection');

app.set("port", (process.env.PORT || 8080));


app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});

//retrieves players by ADP
app.get('/getPlayers', function(req, res){
  console.log("in getPlayers");
  var results = [];
  pg.connect(connection, function(err, client, done){
    // selects list items
    var item = client.query('SELECT * FROM players ORDER BY adp');
    var rows = 0;
    item.on('row', function(row){
      results.push(row);
    });
    item.on('end', function(){
      return res.json(results);
    });
  });
});//end getPlayers
//retrieves quarterbacks by ADP
app.get('/getQbs', function(req, res){
  var results = [];
  pg.connect(connection, function(err, client, done){
    // selects list items
    var item = client.query("SELECT name, position, team FROM players WHERE position = 'QB' ORDER BY adp");
    var rows = 0;
    item.on('row', function(row){
      results.push(row);
    });
    item.on('end', function(){
      return res.json(results);
    });
  });
});//end getQbs
//retrieves running backs by ADP
app.get('/getRbs', function(req, res){
  var results = [];
  pg.connect(connection, function(err, client, done){
    // selects list items
    var item = client.query("SELECT name, position, team FROM players WHERE position = 'RB' ORDER BY adp");
    var rows = 0;
    item.on('row', function(row){
      results.push(row);
    });
    item.on('end', function(){
      return res.json(results);
    });
  });
});//end getRbs

app.get('/getWrs', function(req, res){
  var results = [];
  pg.connect(connection, function(err, client, done){
    // selects list items
    var item = client.query("SELECT name, position, team FROM players WHERE position = 'WR' ORDER BY adp");
    var rows = 0;
    item.on('row', function(row){
      results.push(row);
    });
    item.on('end', function(){
      return res.json(results);
    });
  });
});//end getWrs

app.get('/getTes', function(req, res){
  var results = [];
  pg.connect(connection, function(err, client, done){
    // selects list items
    var item = client.query("SELECT name, position, team FROM players WHERE position = 'TE' ORDER BY adp");
    var rows = 0;
    item.on('row', function(row){
      results.push(row);
    });
    item.on('end', function(){
      return res.json(results);
    });
  });
});//end getTes

app.get('/getKs', function(req, res){
  var results = [];
  pg.connect(connection, function(err, client, done){
    // selects list items
    var item = client.query("SELECT name, position, team FROM players WHERE position = 'K' ORDER BY adp");
    var rows = 0;
    item.on('row', function(row){
      results.push(row);
    });
    item.on('end', function(){
      return res.json(results);
    });
  });
});//end getKs

app.get('/getDEFs', function(req, res){
  var results = [];
  pg.connect(connection, function(err, client, done){
    // selects list items
    var item = client.query("SELECT name, position, team FROM players WHERE position = 'DEF' ORDER BY adp");
    var rows = 0;
    item.on('row', function(row){
      results.push(row);
    });
    item.on('end', function(){
      return res.json(results);
    });
  });
});//end getDEFs

//base url
app.get("/*", function(req,res){
    // console.log(req.params[0]);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

// var passport = require('../strategies/user-local.js');
// var session = require('express-session');

// app.use(session({
//   secret: 'any string',
//   key: 'user',
//   resave: 'true',
//   saveUninitialized: false,
//   cookie: {maxage: 60000, secure: false}
// }));

//init passport
// app.use(passport.initialize());
// app.use(passport.session());


// app.get("/register", function(req,res){
//     // console.log(req.params[0]);
//     var file = req.params[0] || "/views/register.html";
//     res.sendFile(path.join(__dirname, "/public/", file));
// });







// app.get("/login", function(req,res){
//     // console.log(req.params[0]);
//     console.log( 'ghjhgr' );
//     var file = req.params[0] || "/views/login.html";
//     res.sendFile(path.join(__dirname, "/public/", file));
// });

// app.get("/", function(req,res){
//     // console.log(req.params[0]);
//     var file = req.params[0] || "/views/login.html";
//     res.sendFile(path.join(__dirname, "/public/", file));
// });







// app.post('/register', function(req, res) {
//   console.log( 'req.body:', req.body);
//   // console.log('username = ', req.body.username);
//   // console.log('password = ', req.body.password);
//   //
//   // //connect to the database!!
//   // pg.connect(connection, function (err, client, done) {
//   //
//   //   var userToSave = {
//   //     username: req.body.username,
//   //     password: encryptionLib.encryptPassword(req.body.password)
//   //   };
//   //
//   //   client.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id",
//   //    [req.body.username, userToSave.password],
//   //     function(err, result) {
//   //       done();
//   //
//   //       if(err){
//   //         console.log(err);
//   //         res.sendStatus(500);
//   //       }else{
//   //         // console.log(result);
//   //         console.log('success', result.rows[0].id);
//   //         res.redirect('/');
//   //       }
//   //   });
//   // });
// });
//
// var login = require('./routes/login.js');
// var register = require('./routes/register.js');
//
// app.use('/register', register);
// app.use('/*', login); //logi
