'use strict';
const discussion = require('./discussion');
const profile = require('./profile');
const message = require('./message');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(message);
  app.configure(profile);
  app.configure(discussion);
};
