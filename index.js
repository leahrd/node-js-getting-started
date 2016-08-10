var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var needle = require('needle');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


//views is directory for all template files
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request,response) {
    response.render('pages/index');
});

app.get('/cool', function(request,response) {
    response.send(cool());
});

app.get('/lab8', function(request,response) {
    response.sendFile(__dirname + '/public/mystatic.html');
});



app.get('/redline.json', function(request, response) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    response.set('Content-Type','text/plain');
    var data = " ";
    
    needle.get('http://developer.mbta.com/lib/rthr/red.json', function(error, resp) {
	if(!error && resp.statusCode == 200) {
	    data = resp.body;	    
	    response.send(data);
	}
	else {
	    data = "ERROR: " + error + "status is: " + response.statusCode;
	    response.send(data);
	}
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
