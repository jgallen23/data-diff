var diff = require('./obj-diff');

var getObj = function(arr, key) {
  var obj = {};
  for (var i = 0, c = arr.length; i < c; i++) {
    var item = arr[i];
    obj[item[key]] = item;
  }
  return obj;
}

var dataDiff = function(data1, data2, key) {

  data1 = getObj(data1, key);
  data2 = getObj(data2, key);
  var out = [];

  for (var id in data2) {
    if (data1[id]) {

      var o = diff(data1[id], data2[id]);
      if (typeof o == 'object') {
        o.id = id;
        out.push(o);
      }
    } else {
      out.push(data2[id]);
    }
  }
  return out;
}

module.exports = dataDiff;
