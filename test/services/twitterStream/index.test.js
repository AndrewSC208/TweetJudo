'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('twitterStream service', function() {
  it('registered the twitterStreams service', () => {
    assert.ok(app.service('twitterStreams'));
  });
});
