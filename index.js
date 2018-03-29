var express = require('express')
    ,app = express()
    ,http = require('http').Server(app) //do I need this?
    ,io = require('socket.io')(http) //do I need this?
    ,last_value;

app.set('port', (process.env.PORT || 8080));

app.get('/', function (req, res) {
  if(req.query.command == ""){
	res.send("{ \"command\":\"" + last_value + "\"}");
  }else{
	if(req.query.command == "empty"){
		last_value = "";
		res.send("{}");
	}else{
		res.send("{ \"command\":\"" + req.query.command + "\"}");
		last_value = req.query.command;
	}
  }
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
  console.log("Command: " + req.query.command + ", Function: " + function(req, res));
})
