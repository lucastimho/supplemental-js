var tempF = [67, 32, 99, 78];
var tempC = [];
for (let i = 0; i < tempF.length; i++) {
  tempC.push(tempF[i] - 32 * 0.5556);
}
console.log(tempC);

function printLyrics() {
  console.log("Now this is a story all about how");
  console.log("My life got flipped turned upside down");
  console.log("And I'd like to take a minute, just sit right there");
  console.log("I'll tell you how I became the prince of a town called Bel-Air");
}
printLyrics();

var array = [2, 4, 6];
var newArray = array.reduce(function (p, x) {
  return (p *= x);
});
console.log(newArray);

function convertFToC(x) {
  return x - 32 * 0.5556;
}

var a = [10, 3, 4, 55, 32, 6, 1];
var lessThanFive = a.filter(function (n) {
  return n < 5;
});
console.log(lessThanFive);

function sayHello(x) {
  var text = "";
  for (let i = 0; i < x; i++) {
    text += "hello";
  }
  return text;
}
console.log(sayHello(4));

function double(n) {
  return n * 2;
}
