const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const listAnimals = data.species.filter((specie) => specie.name.includes(animal));
  const contanier = listAnimals.map((jaula) => jaula.residents)[0].every((resi) => resi.age > age);
  return contanier;
}
module.exports = getAnimalsOlderThan;
