var assert = require('assert');
var dataDiff = require('../');

var data1 = require('./fixtures/a1.json');
var data2 = require('./fixtures/a2.json');

suite('dataDiff', function() {

  var diff;
  setup(function() {
    diff = dataDiff(data1, data2, 'id');
  });

  var find = function(id, arr) {
    return arr.filter(function(item) {
      return (item.id == id);
    });
  }

  test('should not return id=1 because it is the same', function() {
    var out = find(1, diff);
    assert.equal(out.length, 0);
  });
  test('should return id=2 becaue it has changed', function() {
    var out = find(2, diff);
    assert.equal(out.length, 1);
  });
  test('should only return the changed values of id=2', function() {
    var out = find(2, diff)[0];

    var id2 = {
      id: 2,
      status: 2,
      counts: {
        toes: 10
      }
    }
    assert.deepEqual(out, id2);
  });

  test('should return id=3 because it is new', function() {
    var out = find(3, diff)[0];

    var id3 = {
      id: 3,
      name: "John Smith",
      status: 2,
      counts: {
        fingers: 5,
        toes: 5
      }
    }
    assert.deepEqual(out, id3);
    
  });
  
  test('entire obj', function() {
    assert.deepEqual(diff, require('./fixtures/out.json'));
  });
});

