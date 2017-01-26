'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('discussion service', function() {
  it('registered the discussions service', () => {
    assert.ok(app.service('discussions'));
  });
});
