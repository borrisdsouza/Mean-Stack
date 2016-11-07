var child_process = require('child_process');

console.log("1");

var newprocess = child_process.spawn('node', ['fibonachi.js'], {
  stdio : 'inherit'
});

console.log("2");
