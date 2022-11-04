var assert = require('assert');
const x = "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";
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});

