var path = require('path');
var statuses = require('statuses');
var notifier = require('node-notifier');

var successIcon = path.join(__dirname, 'icons/success.png');
var errorIcon = path.join(__dirname, 'icons/error.png');

module.exports = function (opts) {
  opts = opts || {};

  return function* (next) {
    try {
      yield* next;
    } catch (e) {
      var status = e.status || e.code || e.statusCode || 500;
      notifier.notify(opts[status] || {
        title: status,
        message: e.message || statuses[status],
        icon: errorIcon
      });
      throw e;
    }

    notifier.notify(opts[this.status] || {
      title: this.status,
      message: this.body || this.message || statuses[this.status],
      icon: (this.status < 400) ? successIcon : errorIcon
    });
  };
};