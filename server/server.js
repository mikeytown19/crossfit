var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var userCtrl = require("./controllers/userCtrl.js")
var User = require("./models/userSchema.js")


var app = express();

app.use(express.static('../public'))





//////////////////////
//////Endpoints//////
////////////////////





////////////////
///////User////
//////////////
app.post('/api/user/', userCtrl.addUser);
app.post('/auth/login', userCtrl.userLogin);
app.post('/auth/signup', userCtrl.userSignUp);









mongoose.connect('mongodb://localhost/crossfit', function(err) {
    if (err) throw err;
});
mongoose.connection.once('open', function() {
    console.log('Connected To MongoDB!!!');
});

app.listen(3000, function() {
     console.log('There\'s a party in my pants');
 })
