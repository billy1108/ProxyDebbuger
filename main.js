/**
*
* 	Copyright (c) 2015 by Billy Caballero <billy.11080@gmail.com>
* 	MIT License. See LICENSE for more info.
*
*/

/**
* Dependencies
*/

var constants = require("./config/constant.json");

var colors = require('colors');
var hoxy = require('hoxy');

var express = require('express');
var http = require('http');
var socketIo = require('socket.io');


/**
* Variables
*/

var portProxy = constants.PORTPROXY;
var portServer = constants.PORTSERVER;


/**
* Server Backend
*/


var app = express();
var server = http.createServer(app);
var io = socketIo(server);
io.on('connection', function(socket){ });

// Express Routing
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

// Permition files
app.use(express.static(__dirname + '/public'));

// init express server
server.listen(portServer);


/**
* Proxy Server
*/

var proxy = hoxy.createServer().listen(portProxy);

proxy.intercept({
  	phase: 'response',
  	mimeType: 'application/json',
	as: 'json'
}, function(req, resp, cycle) {
	console.log(colors.rainbow('***************************************************************'));
	console.log(colors.cyan('URL =>' + req.url ));
	console.log(colors.green('=============================================================='));
	console.log(colors.cyan('JSON =>' + JSON.stringify(resp.json) ));
	var param = { "url" : req.url, "data" : resp.json};
	io.sockets.emit("msg", param);
});

/**
* Listening Servers
*/

console.log(colors.cyan('Proxy on 0.0.0.0:' + portProxy)); 
console.log(colors.cyan('Server on 0.0.0.0:' + portServer)); 