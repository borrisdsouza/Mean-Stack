
require('./instantHello');
  var goodbye = require('./talk/goodBye');  // ./  Look in the same folder
  var talk =  require('./talk');           // This will look for file in same folder as app.js or talk.js
                                           // if if dosent find that it will look for the folder
                                           // talk and inside that look for Index.js
  var question = require ('./talk/question');
   talk.intro();
   talk.hello("Simon");


  goodbye();    // the Var saved that as a function

// Creating Modules and Exports and using the require();
// Rewuire a file "./"
// .js not required
// Index.js is not required.
// Call methods - store that value




var answer = question.ask("What is the meaning of life ?");
console.log(answer);
