const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const zoneAnimal = species.find((jaula) => jaula.name === animal);
  // filtro para pegar objeto do paramentro
  return zoneAnimal.residents.every((resi) => resi.age >= age);
  // retorno com teste para saber se todos atendem a condição
}
getAnimalsOlderThan();
module.exports = getAnimalsOlderThan;
