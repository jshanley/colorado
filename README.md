#colorado [![NPM version](https://badge.fury.io/js/colorado.png)](http://badge.fury.io/js/colorado)

ridiculously simple console string styling in [nodejs](http://nodejs.org).

_aside: named after a cool state_

###Install
```
npm install colorado
```
###Usage
```javascript
var ansi = require('colorado').encode,
    raw  = require('colorado').raw;
```
`colorado.encode` is a function that takes any number of strings as arguments,
and concatenates them into an ansi-encoded string.

`colorado.raw` is a function that takes an ansi-encoded string,
and gives back the raw text. This is very useful when you want to get the length
of the output text, for instance, to set a cursor position.


###colorado.encode( )
_hereafter stored in var 'ansi' for legibility_

Pass in a string to add plain text:
```javascript
var boring = ansi('blah');
console.log(boring); // is boring
```

Use double handlebars to specify styles (comma separated):
```javascript
var dangerous = ansi('{{red,bold,blink}}danger!');
console.log(dangerous); // made you look
```

If you already know the code number for a style, pass it as a number:
```javascript
var justAsDangerous = ansi('{{31,1,5}}danger!');
console.log(justAsDangerous); // remarkably similar
```

You can inline a whole bunch of them, and mix and match names and code numbers:
```javascript
var obviouslyPractical = ansi(
  '{{blue,104}}blue{{blink}}flashing{{1}}emphasized{{reset}}normal'
);
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

###colorado.raw( )

_hereafter stored as var 'raw' for legibility_

```javascript
var pretty = ansi('{{blue}}Isn\'t this pretty?');

// it sure is, lets write it
process.stdout.write(pretty, 'utf8');
// now I want the cursor 2 spaces after that...
// so I need to know the printed length of the pretty string
// or else all those escape characters will put me in outer space
var actualLength = raw(pretty).length;
process.stdout.cursorTo(actualLength + 2);
process.stdout.write('I\'m right where I wanted to be...', 'utf8');
```

It really clears things up...
```javascript
var ugly = '\u001b[36;1mfinally\u001b[37m, \u001b[22mclarity\u001b[39;49;0m.'

raw(ugly);  // 'finally, clarity.'

```
