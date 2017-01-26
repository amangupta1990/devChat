'use strict';

const service = require('feathers-mongoose');
const discussion = require('./discussion-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: discussion,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/discussions', service(options));

  // Get our initialize service to that we can bind hooks
  const discussionService = app.service('/discussions');

  // Set up our before hooks
  discussionService.before(hooks.before);

  // Set up our after hooks
  discussionService.after(hooks.after);
};
