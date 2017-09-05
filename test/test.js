var assert = require('assert');
var app = require('../src/app.js');

describe('Testing', function() {
  it('Does Alphadev rock?', function() {
    assert.equal(true, app.doesAlphaDevRock());
  })
}
)