for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("BLASTOFF!");

for (let i = 1; i < 10000; i *= 2) {
  console.log(i);
}

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
for (let i = 0; i < letters.length; i += 2) {
  console.log(letters[i]);
}

var letter = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
  ["g", "h"],
  ["i", "j"],
];
letter.forEach(function (a) {
  console.log(a[1]);
});

function code(a) {
  var converter = {
    A: "Z",
    B: "Y",
    C: "X",
    D: "W",
    E: "V",
    F: "U",
    G: "T",
    H: "S",
    I: "R",
    J: "Q",
    K: "P",
    L: "O",
    M: "N",
    N: "M",
    O: "L",
    P: "K",
    Q: "J",
    R: "I",
    S: "H",
    T: "G",
    U: "F",
    V: "E",
    W: "D",
    X: "C",
    Y: "B",
    Z: "A",
  };
  var b = a.split("");
  var d = [];
  for (let i = 0; i < b.length; i++) {
    d.push(converter[b[i].toUpperCase()]);
  }
  return d.join("");
}
console.log(code("hello"));

var letterGroups = [
  ["a", "b", "z"],
  ["c", "d"],
  ["e", "f"],
  ["g", "h", "i", "j"],
];
var newArray = [];
letterGroups.forEach(function (a) {
  a.forEach(function (s) {
    newArray.push(s);
  });
});
console.log(newArray.join(""));

function pigLatin(s) {
  let a = s.split("");
  a.push(a[0]);
  a.push("ay");
  a.shift();
  var b = a.join("");
  return b;
}
console.log(pigLatin("marmalade"));
