var http = require('http');
var url = require('url');

var bookList = [
	{ id: 1, name: 'Harry potter' }
];

// Create a HTTP server
var server = http.createServer(function (req, res) {
	var urlData = url.parse(req.url);
	console.log(urlData);

	if (urlData.pathname == '/apis/get_book_list') {
		res.writeHead(200, { 'Content-Type': 'json/application' });
		res.end(bookList);
	}
});

// Listen on 3000 port
server.listen(process.env.PORT, function() {
	console.log('Server running at http://localhost/');
});
