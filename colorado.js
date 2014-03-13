var codes = require('./codes');

// total reset, to make sure no styles bleed over
// specifies default foreground, default background, reset
var reset = '\x1b[39;49;0m';

// captures text input between double handlebars
var handlebar_regex = /\{\{(.*?)\}\}/g;
function replacement(match, p1) {
  return getANSI(p1);
}

// given the text the regex pulls out
function getANSI(styleString) {

  // make an array of input items that are separated by commas
  var styles = styleString.split(',');

  // a list to stage items to be combined later
  var list = [];

  // iterate over the array of styles
  for (var s = 0; s < styles.length; s++) {

    // if the item is a number, add it directly to the list
    if (/^[0-9]+$/.test(styles[s])) {
      list.push(styles[s]);

      // if the item is in the list of codes in the json file, get its value
      //   and add it to the list
    } else if (typeof codes[styles[s]] !== 'undefined') {
      list.push(codes[styles[s]]);

      // otherwise if no match is found simply ignore the input and continue
    } else {
      continue;
    }
  }
  // wrap the semicolon-separated list in ansi grossness
  return '\x1b[' + list.join(';') + 'm';
}

exports.encode = function() {
  // make passed arguments into an array
  var args = Array.prototype.slice.call(arguments, 0);

  // this will be the output string we will build
  var output = '';

  // iterate over passed strings
  for (var i = 0; i < args.length; i++) {
    var current = args[i].replace(handlebar_regex, replacement);

    // add formatted string to output
    output += current;

    // reset if styles were added
    if (current !== args[i]) {
      output += reset;
    }
  }

  // return the complete output string
  return output;
};

var ansi_regex = /\x1b\[(?:\d+|\;)*?m/g;

exports.raw = function(str) {
  return str.replace(ansi_regex, '');
};
