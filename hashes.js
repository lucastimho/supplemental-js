const cityPopulations = new Map();
cityPopulations.set("Chicago", 270000);
cityPopulations.set("New York City", 8400000);
cityPopulations.set("San Francisco", 800000);
for (let [k, v] of cityPopulations) {
  console.log(`${k} has a population of ${v}`);
}
console.log(cityPopulations.get("Chicago"));

const drink1 = { name: "Seltzer", ingredients: ["water", "bubbles"] };
const drink2 = { name: "Coca Cola", ingredients: ["water", "bubbles", "sugar", "brown food coloring"] };
const drink3 = { name: "water", ingredients: ["hydrogen", "oxygen"] };
console.log(drink1.name);
console.log(drink1.ingredients);
console.log(drink1.ingredients[0]);

var people = [
  {
    first_name: "Robert",
    last_name: "Garcia",
    hobbies: ["basketball", "chess", "phone tag"],
  },
  {
    first_name: "Molly",
    last_name: "Barker",
    hobbies: ["programming", "reading", "jogging"],
  },
  {
    first_name: "Kelly",
    last_name: "Miller",
    hobbies: ["cricket", "baking", "stamp collecting"],
  },
];
people.forEach(function (h) {
  h.hobbies.forEach(function (s) {
    console.log(s);
  });
});
people.forEach(function (h) {
  h.email = `${h.first_name}${h.last_name}@gmail.com`;
  console.log(h.email);
});
