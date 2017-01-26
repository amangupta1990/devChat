'use strict';

const assert = require('assert');
const beforeCreate = require('../../../../src\services\discussion\hooks\before-create.js');

describe('discussion beforeCreate hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    beforeCreate()(mockHook);

    assert.ok(mockHook.beforeCreate);
  });
});
