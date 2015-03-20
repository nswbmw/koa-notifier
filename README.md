## koa-notifier

Wrap [node-notifier](https://github.com/mikaelbr/node-notifier) for koa, cute for test..

### Install

```
npm i koa-notifier --save
```

### Usage

```
notifier(options)
```

`options` is a obejct that key as `status`:

```
{
  '200': {
    title: 'success',
    message: 'LOL, have a nice day.',
    icon: __dirname + '/success.jpg',
    ...
  },
  '404': {
    title: 'Opps, 404',
    message: 'This page was not founded.',
    icon: __dirname + '/error.jpg',
    ...
  },
  '500': {
    title: '500!!!!!',
    message: 'What the fuck.',
    icon: __dirname + '/error.jpg',
    ...
  }
  ...
}
```
see [node-notifier](https://github.com/mikaelbr/node-notifier) for more details.

### Example

Default usage:

```
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
```

Or use custom options:

```
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
```

Now, open your browser and type:

```
localhost:3000
```

![200](https://raw.githubusercontent.com/nswbmw/koa-notifier/master/screenshot/200.png)

```
localhost:3000/abc
```

![404](https://raw.githubusercontent.com/nswbmw/koa-notifier/master/screenshot/404.png)

```
localhost:3000/error
```

![500](https://raw.githubusercontent.com/nswbmw/koa-notifier/master/screenshot/500.png)

### License

MIT