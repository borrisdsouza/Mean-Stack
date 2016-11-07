var fs = require('fs');

var onFileLoad = function(err , file ) {
  console.log('Got the file ');
};

console.log('Goining to get the gile');
fs.readFile('readFileSync.js' , onFileLoad);

console.log('app comtinus...');
