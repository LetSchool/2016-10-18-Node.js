var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();
client.on('connect', function(connection) {
	console.log('Connected to Server');

	connection.on('message', function(msg) {
		console.log(msg);
	});

	setInterval(function() {
		connection.sendUTF(JSON.stringify({
			name: 'Fred',
			msg: 'Hi~~'
		}));
	}, 1000);
});

client.connect('wss://node-js-traning-cfsghost.c9users.io/');
