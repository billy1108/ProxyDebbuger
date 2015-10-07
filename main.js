/**
*
* 	Copyright (c) 2015 by Billy Caballero <billy.11080@gmail.com>
* 	MIT License. See LICENSE for more info.
*
*/

var hoxy = require('hoxy');
var colors = require('colors');
var port = 8003
var proxy = hoxy.createServer().listen(port);

console.log(colors.cyan('Proxy on 0.0.0.0:' + port)); // outputs green text 

proxy.intercept({
  	phase: 'response',
  	mimeType: 'application/json',
	as: 'json'
}, function(req, resp, cycle) {
	console.log(colors.rainbow('***************************************************************'));
	console.log(colors.cyan('URL =>' + req.url ));
	console.log(colors.green('=============================================================='));
	console.log(colors.cyan('JSON =>' + JSON.stringify(resp.json) ));
});
