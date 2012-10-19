
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
