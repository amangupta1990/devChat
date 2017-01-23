'use strict';

const process = require('./process');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [ auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()],
  find: [],
  get: [],
  create: [process()],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [auth.populateUser()],
  get: [auth.populateUser()],
  create: [auth.populateUser()],
  update: [],
  patch: [],
  remove: []
};
