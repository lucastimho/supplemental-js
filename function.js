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
