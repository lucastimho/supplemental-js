var tempF = [67, 32, 99, 78];
var tempC = [];
for (let i = 0; i < tempF.length; i++) {
  tempC.push(tempF[i] - 32 * 0.5556);
}
console.log(tempC);
