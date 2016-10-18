var koa = require('koa');
var Router = require('koa-router');
var app = koa();

var router = new Router();
router.get('/', function *() {
	this.body = 'Hello World';
});

router.get('/test/:id/:msg', function *() {
	this.body = this.params.id + ':' + this.params.msg;
}); 

app.use(router.middleware());
app.listen(process.env.PORT);
