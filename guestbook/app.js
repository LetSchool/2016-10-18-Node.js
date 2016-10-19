var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var Router = require('koa-router');
var views = require('koa-views');
var app = koa();

var msgs = [
	{
		name: 'Fred',
		msg: 'Hi there!'
	},
	{
		name: 'Stacy',
		msg: 'Hey!'
	}
];

var router = new Router();
router.get('/', function *() {
	yield this.render('home', { msgs: msgs });
});

router.get('/post', function *() {
	yield this.render('post');
});

router.post('/post', function *() {

	var newMsg = {
		name: this.request.body.name,
		msg: this.request.body.msg
	};

	msgs.push(newMsg);

	this.body = 'DONE';
}); 

app.use(bodyParser());
app.use(views(__dirname + '/views', {
	extension: 'pug',
	map: {
		html: 'pug'
	}
}));
app.use(router.middleware());
app.listen(process.env.PORT);
