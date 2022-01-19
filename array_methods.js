var x = [2, 4, 1, 5];
x.map(function (n) {
  return n * 10;
});

var y = [3, 123, 433, -77, 56, 200, 99, 101, 6];
y.filter(function (n) {
  return n > 100;
});

var z = ["cat", "remove", "list", "change"];
z.filter(function (s) {
  return s.length < 5;
});

var a = [8, 3, 10, 4];
a.reduce(function (p, n) {
  return p * n;
});

var num = [5, 10, 15, 4, 9];
num.map(function (n) {
  return n + 7;
});

var inputNumbers = [3, 2, 10, 4, 23, 9];
inputNumbers.filter(function (n) {
  return n < 10;
});
