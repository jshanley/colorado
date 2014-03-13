#colorado [![NPM version](https://badge.fury.io/js/colorado.png)](http://badge.fury.io/js/colorado)

ridiculously simple console string styling in [nodejs](http://nodejs.org).

_aside: named after a cool state_

###Install
```
npm install colorado
```
###Usage
```javascript
var colorado = require('colorado');
```
`colorado` is a function that takes any number of strings as arguments.

Pass in a string to add plain text:
```javascript
var boring = colorado('blah');
console.log(boring); // is boring
```

Use double handlebars to specify styles (comma separated):
```javascript
var dangerous = colorado('{{red,bold,blink}}danger!');
console.log(dangerous); // made you look
```

If you already know the code number for a style, pass it as a number:
```javascript
var justAsDangerous = colorado('{{31,1,5}}danger!');
console.log(justAsDangerous); // remarkably similar
```

You can inline a whole bunch of them, and mix and match names and code numbers:
```javascript
var obviouslyPractical = colorado('{{blue,104}}blue{{blink}}flashing{{1,49}}emphasized{{reset}}normal')
console.log(obviouslyPractical); // trés artistique
```

Styles are reset between each string passed:
```javascript
var cuteStory = colorado(
  'I was reading all this boring text and then... ',
  '{{bold,yellow,redBG}} BAM! ',
  '{{36}} everything looked cyan to me...'
);
console.log(cuteStory); // very anecdotal
```
