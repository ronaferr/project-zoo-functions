const data = require('../data/zoo_data');

const s = data.species;
const e = data.employees;

function findOldAnimal(id) {
  const findId = s.filter((specie) => specie.id === id)[0].residents;
  const getOldAnimal = (old, actual) => ((old.age > actual.age) ? old : actual);
  const oldAnimal = findId.reduce(getOldAnimal, 0);
  return Object.values(oldAnimal);
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const person = e.filter((employee) => employee.id === id);
  const animals = person.map((a) => a.responsibleFor)[0];
  const result = findOldAnimal(animals[0]);
  return result;
}
module.exports = getOldestFromFirstSpecies;
