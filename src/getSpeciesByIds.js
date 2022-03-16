const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(ids = [], ids1 = []) {
  // seu código aqui
  const result = species.filter((element) => element.id === ids || element.id === ids1);
  return result;
}
getSpeciesByIds();
module.exports = getSpeciesByIds;
