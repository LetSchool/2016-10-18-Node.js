var http = require('http');

// Create a HTTP server
var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World\n');
});

// Listen on 3000 port
server.listen(process.env.PORT, function() {
	console.log('Server running at http://localhost/');
});
