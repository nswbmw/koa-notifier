var koa = require('koa');
var route = require('koa-route');
var notifier = require('..');

var app = koa();

if (process.env.NODE_ENV !== 'production') {
  app.use(notifier({
    '200': {
      title: 'success',
      message: 'LOL, have a nice day.',
      icon: __dirname + '/success.jpg'
    },
    '404': {
      title: 'Opps, 404',
      message: 'This page was not founded.',
      icon: __dirname + '/error.jpg'
    },
    '500': {
      title: '500!!!!!',
      message: 'What the fuck.',
      icon: __dirname + '/error.jpg'
    }
  }));
}

app.use(route.get('/', function* () {
  this.body = 'Have a nice day!';
}));

app.use(route.get('/error', function* () {
  crash();
}));

app.listen(3000, function () {
  console.log('listening on 3000.');
});