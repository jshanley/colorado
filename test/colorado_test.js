var colorado = require('../colorado');

exports.colorado = function(test) {
  test.ok(colorado);
  test.equal(colorado(['red'], 'test'), '\x1b[31mtest\x1b[39;49;0m');
  test.equal(colorado(['blink', 'cyan'], 'test', ['green'], 'again'), '\x1b[5;36mtest\x1b[32magain\x1b[39;49;0m');
  test.equal(colorado([31,1], 'warning'), '\x1b[31;1mwarning\x1b[39;49;0m');
  test.done();
};
