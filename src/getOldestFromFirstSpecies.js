const data = require('../data/zoo_data');

const s = data.species;
const e = data.employees;

function findOldAnimal(id) {
  // função para filtrar animal com id de parametro, e passar residentes
  const findId = s.filter((specie) => specie.id === id)[0].residents;
  // função para ser usada como reduce com animais residentes e pegar o mais velho
  const getOldAnimal = (old, actual) => ((old.age > actual.age) ? old : actual);
  const oldAnimal = findId.reduce(getOldAnimal, 0);
  return Object.values(oldAnimal);
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  // filtro para achar funcionario com id de parametro
  const person = e.filter((employee) => employee.id === id);
  // map para retornar primeiro animal do qual funcionario é responsavel
  const animals = person.map((a) => a.responsibleFor)[0];
  const result = findOldAnimal(animals[0]);
  return result;
}
module.exports = getOldestFromFirstSpecies;
