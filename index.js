
var express = require('express');

//var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var needle = require('needle');

app.set('port', (process.env.PORT || 5000));

//app.use('/', express.static(__dirname + '/public'));

app.use(cors());

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');


app.get('/redline.json', function(request,response) {
    //response.sendfile('public/mystatic.html');
    response.set('Content-Type','text/plain');
    var data = "GET didn't work";
    needle.get('http://developer.mbta.com/lib/rthr/red.json', function(error, response) {
	if(!error && response.statusCode == 200) {
	    data = response.body;

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
