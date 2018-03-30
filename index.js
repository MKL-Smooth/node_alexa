var express = require('express')
    ,app = express()
    ,http = require('http').Server(app) //do I need this?
    ,io = require('socket.io')(http) //do I need this?
    ,last_value;

app.set('port', (process.env.PORT || 8080));

app.get('/', function (req, res) {

  /*sessionStorage.setItem("MyId", 123);
  var value = sessionStorage.getItem("MyId");
  value = value + „4“;
  .setItem („xyz“, value);*/

  var text = "req: " + req.query.command;
  if(req.query.command == ""){
    text = text + "{ \"command_leer\":\"" + last_value + "\"}";
  }else{
  	if(req.query.command == "empty"){
  		last_value = "";
  		text = text + "{}"
  	}else{
      last_value = req.query.command;
      text = text + "{ \"command\":\"" + last_value + "\"}";
  	}
  } res.send(text);
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
})
