const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // primeiro sera filtrado de species o parametro passado
  const listAnimals = data.species.filter((specie) => specie.name.includes(animal));
  // com o resultado será feito um map para adicionalo a uma array, que sera usado um every para verificar se todos os residents tem idade maior que o passado como parametro
  const contanier = listAnimals.map((jaula) => jaula.residents)[0].every((resi) => resi.age > age);
  return contanier;
}
module.exports = getAnimalsOlderThan;
