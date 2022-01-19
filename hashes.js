const cityPopulations = new Map();
cityPopulations.set("Chicago", 270000);
cityPopulations.set("New York City", 8400000);
cityPopulations.set("San Francisco", 800000);
for (let [k, v] of cityPopulations) {
  console.log(`${k} has a population of ${v}`);
}
cityPopulations.get("Chicago");
