//var opbeat = require('opbeat').start()

//var static = require('mystatic');
//var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/public'));
//app.use(opbeat.middleware.express())

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//app.get('/', function(request, response) {
    //response.send(mystatic());
//});

//app.get('/cool', function(request, response) {
    //response.send(cool());
//});

app.get('/lab8', function(request,response) {
    response.send(__dirname + 'public/mystatic.html');
    //response.sendfile('public/mystatic.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


