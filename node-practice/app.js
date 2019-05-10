var koa = require('koa');
var controller = require('koa-route');
var app = new koa();

app.use(controller.get('/route_test', function () {
  this.set('Cache-Control', 'no-cache');
  this.body = 'hello koa';
}))
app.listen(3001);
