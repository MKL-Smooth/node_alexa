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

  res.send("req: " + req);
  if(req.query.command == ""){
  res.send("{ \"command_leer\":\"" + last_value + "\"}");
  //res.send("Command " + req.query.command + ",Function " + function(req,res));
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
})
