var events = require('events');
var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var Router = require('koa-router');
var views = require('koa-views');
var serve = require('koa-static');
var websockify = require('koa-websocket');

var eventEmitter = new events.EventEmitter();

var app = koa();
var socket = websockify(app);

var wsRouter = new Router();
wsRouter.get('/', function *() {
	console.log('Connected');

	var self = this;
	var newMsgCallback = function(msg) {
		self.websocket.send(msg);
	};

	this.websocket.send('Welcome');
	this.websocket.on('message', function(msg) {
		console.log(msg);
		eventEmitter.emit('new', msg);
	});

	this.websocket.on('close', function() {
		eventEmitter.removeListener('new', newMsgCallback);
		console.log('Disconnected');
	});

	eventEmitter.on('new', newMsgCallback);
});

var router = new Router();
router.get('/', function *() {
	yield this.render('home');
});

app.use(serve('./public'));
app.use(bodyParser());
app.use(views(__dirname + '/views', {
	extension: 'pug',
	map: {
		html: 'pug'
	}
}));

app.ws
	.use(wsRouter.routes())
	.use(wsRouter.allowedMethods());
app.use(router.middleware());
app.listen(process.env.PORT);
