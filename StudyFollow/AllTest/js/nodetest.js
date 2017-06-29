'use strict'

var http = require('http');

var server = http.createServer(function(request,response){
	response.writeHead({
		'Content-Type':'text/html',
		'key1':'value1'
	});
	response.write('<h1>node js test</h1>');
	response.end();
});

server.listen(8080,function(error){
	console.log("成功效应端口8080");
});