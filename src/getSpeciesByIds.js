const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(ids = [], ids1 = []) {
  // inserção de dois paramentros com default para array vazio caso não estejam vazios
  // seu código aqui
  const result = species.filter((element) => element.id === ids || element.id === ids1);
  return result;
  // criação de variavel que vai filtrar array de dados, se o elemento.id tiver o mesmo do paramentro sera retornado.
}
getSpeciesByIds();
module.exports = getSpeciesByIds;
