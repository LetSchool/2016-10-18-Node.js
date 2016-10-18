var koa = require('koa');
var Router = require('koa-router');
var app = koa();

var router = new Router();
router.get('/', function *() {
	this.body = 'Hello World';
});

router.get('/q', function *() {
	this.body = this.request.query.name;
});

app.use(router.middleware());
app.listen(process.env.PORT);
