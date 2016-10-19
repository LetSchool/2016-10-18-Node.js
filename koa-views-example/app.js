var koa = require('koa');
var Router = require('koa-router');
var views = require('koa-views');
var app = koa();

var router = new Router();
router.get('/', function *() {
	yield this.render('home');
});

app.use(views(__dirname + '/views', {
	extension: 'pug',
	map: {
		html: 'pug'
	}
}));
app.use(router.middleware());
app.listen(process.env.PORT);
