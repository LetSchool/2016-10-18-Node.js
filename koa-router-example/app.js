var koa = require('koa');
var Router = require('koa-router');
var app = koa();

var router = new Router();
router.get('/', function *() {
	this.body = 'Hello World';
});

router.get('/page2', function *() {
	this.body = 'page2';
});

app.use(router.middleware());
app.listen(process.env.PORT);
