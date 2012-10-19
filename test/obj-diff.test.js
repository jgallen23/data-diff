var assert = require('assert');
var objDiff = require('../lib/obj-diff');

suite('objDiff', function() {

  test('if same return true', function() {
    var out = objDiff({ a: 1 }, { a: 1 });
    assert.equal(out, true);
  });

  test('only return changes', function() {
    var out = objDiff({ a: 1 }, { a: 1, b: 2});
    assert.deepEqual(out, { b: 2 });
  });

  test('return value changes', function() {
    var out = objDiff({ a: 1 }, { a: 2 });
    assert.deepEqual(out, { a: 2 });
  });

  test('if key is missing from newer data, ignore it', function() {
    var out = objDiff({ a: 1 }, { b: 2 });
    assert.deepEqual(out, { b: 2 });
  });

  test('nested', function() {
    var out = objDiff({ a: { b: 1, c: 1 }}, { a: { b: 2, c: 1 }});
    assert.deepEqual(out, { a: { b: 2 }});
  });
  
});

