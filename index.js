<<<<<<< HEAD
var express = require('express')
    ,app = express()
    ,http = require('http').Server(app) //do I need this?
    ,io = require('socket.io')(http) //do I need this?
    ,last_value;

app.set('port', (process.env.PORT || 8080));

app.get('/', function (req, res) {
  //console.log("Command: " + req.query.command + ", Function: " + function(req, res));

  /*var div = document.createElement('div');
  div.setAttribute('class', 'post block bc2');
  div.innerHTML = "<script>command: </script> + ";
  document.getElementById('posts').appendChild(div);*/

  var text = "req: " + req;
  if(req.query.command == ""){
  text = text + "{ \"command_leer\":\"" + last_value + "\"}";
  //res.send("Command " + req.query.command + ",Function " + function(req,res));
  }else{
	if(req.query.command == "empty"){
		last_value = "";
		text = text + "{empty}"
	}else{
    last_value = req.query.command;
    text = text + "{ \"command\":\"" + req.query.command + "\"}";
	}
  } res.send(text);
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
})
=======
var express = require('express')
    ,app = express()
    ,http = require('http').Server(app) //do I need this?
    ,io = require('socket.io')(http) //do I need this?
    ,last_value;

app.set('port', (process.env.PORT || 8080));

app.get('/', function (req, res) {
  //console.log("Command: " + req.query.command + ", Function: " + function(req, res));

  /*var div = document.createElement('div');
  div.setAttribute('class', 'post block bc2');
  div.innerHTML = "<script>command: </script> + ";
  document.getElementById('posts').appendChild(div);*/

  var text = "req: " + req;
  if(req.query.command == ""){
  text = text + "{ \"command_leer\":\"" + last_value + "\"}";
  //res.send("Command " + req.query.command + ",Function " + function(req,res));
  }else{
	if(req.query.command == "empty"){
		last_value = "";
		text = text + "{empty}"
	}else{
    //last_value = req.query.command;
    text = text + "{ \"command\":\"" + req.query.command + "\"}";
	}
  } res.send(text);
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
})
>>>>>>> df9ecba7d773176e188e59055278a0cb815eca7e
