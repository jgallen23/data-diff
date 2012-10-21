/*!
  * data-diff.js - A library that calculates the changes from one json object to another
  * v0.0.2
  * https://github.com/jgallen23/data-diff
  * copyright JGA 2012
  * MIT License
  */

//built with clientside 0.2.0 https://github.com/jgallen23/clientside
if (typeof __cs == 'undefined') {
  var __cs = { 
    map: {}, 
    libs: {},
    r: function(p) {
      var mod = __cs.libs[__cs.map[p]];
      if (!mod) {
        throw new Error(mod + ' not found');
      }
      return mod;
    }
  };
  window.require = __cs.r;
}
__cs.map['./obj-diff'] = 'cs690970'

//obj-diff.js
__cs.libs.cs690970 = (function(require, module, exports) {
var diff = function(obj1, obj2) {
  var out = {};
  var same = true;
  for (var key in obj2) {
    if (obj1[key] == obj2[key]) {
      continue;
    }
    if (!obj1[key]) {
      out[key] = obj2[key];
      same = false;
    } else {
      if (typeof obj2[key] == 'object') {
        var o = diff(obj1[key], obj2[key]);
        if (typeof o == 'object') {
          out[key] = o;
          same = false;
        }
      } else {
        same = false;
        out[key] = obj2[key];
      }
    }
  }
  return same || out;
}
module.exports = diff;
return module.exports || exports;
})(__cs.r, {}, {});

//data-diff.js
var dataDiff = __cs.libs.main = (function(require, module, exports) {
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
return module.exports || exports;
})(__cs.r, {}, {});


