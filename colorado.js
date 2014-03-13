var codes = require('./codes');

module.exports = function() {
  // make passed arguments into an array
  var args = Array.prototype.slice.call(arguments, 0);

  // this will be the output string we will build
  var output = '';

  // iterate over passed args
  for (var o = 0; o < args.length; o++) {

    // if an argument is an array, it will be interpreted as a list of codes
    if (args[o] instanceof Array) {

      // add the start of an ansi code
      output += '\x1b[';

      // 'group' will be an array of ansi code numbers as strings
      var group = [];

      // iterate over the list of codes
      for (var i = 0; i < args[o].length; i++) {

        // if a code is a number, convert it to a string and put it in the group
        if (typeof args[o][i] === 'number') {
          group.push(args[o][i].toString(10));

          // otherwise if it's a string that is a key in the json file then
          //   get its code value from the json file and put it in the group
        } else if (typeof args[o][i] === 'string' && typeof codes[args[o][i]] !== 'undefined') {
          group.push(codes[args[o][i]]);
          // if these conditions aren't met, simply ignore this value and continue
        } else {
          continue;
        }
      }

      // append the group as a string joining codes with a semicolon
      output += group.join(';');

      // finally, append 'm' which ends the ansi code
      output += 'm';

      // end of (if (args[o] instanceof array))


      // if an argument is a string, simply append it to the output
    } else if (typeof args[o] === 'string'){
      output += args[o];

      // if an argument is neither a string nor array, ignore it
    } else {
      continue;
    }
  }

  // total reset, to make sure no styles bleed over
  // specifies default foreground, default background, reset
  output += '\x1b[39;49;0m';

  // return the complete output string
  return output;
};
