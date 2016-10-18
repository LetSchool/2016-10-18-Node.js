var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var Router = require('koa-router');
var app = koa();

var router = new Router();
router.get('/', function *() {
	this.body = '<form action="/" method="POST">' +
	'<input type="TEXT" name="id">' +
	'<input type="submit">' +
	'</form>';
});

router.post('/', function *() {
	this.body = this.request.body.id;
}); 

app.use(bodyParser());
app.use(router.middleware());
app.listen(process.env.PORT);
