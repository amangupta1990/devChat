'use strict';

const assert = require('assert');
const addExtraFields = require('../../../../src\services\user\hooks\add_extra_fields.js');

describe('user addExtraFields hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    addExtraFields()(mockHook);

    assert.ok(mockHook.addExtraFields);
  });
});
