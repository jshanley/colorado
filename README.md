#colorado

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
`colorado` is a function that takes any number of arguments.

Pass in a string to add plain text:
```javascript
var boring = colorado('blah');
console.log(boring); // is boring
```
Pass it an array of styles and it will turn them into ANSI codes:

```javascript
var dangerous = colorado(['red','bold','blink'], 'danger!');
console.log(dangerous); // made you look
```

If you already know the code number for a style, pass it as a number:
```javascript
var justAsDangerous = colorado([31,1,5], 'danger!');
console.log(justAsDangerous); // remarkably similar
```
Easily inline styles by passing several arguments:
```javascript
var cuteStory = colorado(
  'I was reading all this boring text and then ',
  ['bold', 'yellow', 'redBG'],
  'BAM!',
  [22,36,49], ' everything looked cyan to me...'
);
console.log(cuteStory); // very anecdotal
```
