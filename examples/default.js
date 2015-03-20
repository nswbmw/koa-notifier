var koa = require('koa');
var route = require('koa-route');
var notifier = require('..');

var app = koa();

if (process.env.NODE_ENV !== 'production') {
  app.use(notifier());
}

app.use(route.get('/', function* () {
  this.body = 'Have a nice day!';
}));

app.use(route.get('/error', function* () {
  this.throw(400, 'Some errorrrr!');
}));

app.listen(3000, function () {
  console.log('listening on 3000.');
});