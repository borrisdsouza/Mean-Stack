var filename = "index.js";

var hello = function (name) {
  console.log("Hello" + name);
}

var intro = function () {
console.log("I am node " + filename);

}

module.exports = {    // Java script Object
    hello: hello,
    intro: intro
};
