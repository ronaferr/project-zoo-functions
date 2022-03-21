const data = require('../data/zoo_data');

const e = data.employees;
const s = data.species;

function dadosFuncionario(dados) {
  const result = {};

  const b = dados[0].responsibleFor;
  const teste = b.map((ids) => (s.filter((animals) => animals.id === ids)));
  const criaçãoDeObjetoSpecies = teste.map((animals) => animals[0].name);
  const criaçãoDeObjetoRegiao = teste.map((animals) => animals[0].location);

  const a = dados.map((valor) => ({
    [`${'id'}`]: valor.id,
  }));
  a.forEach((obj1) => Object.assign(result, obj1));
  result.fullName = `${dados[0].firstName} ${dados[0].lastName}`;
  result.species = criaçãoDeObjetoSpecies;
  result.locations = criaçãoDeObjetoRegiao;

  // console.log(result);
  return result;
}

function getEmployeesCoverage(obj) {
  // seu código aqui
  if (!obj) {
    const every = e.map((employee) => [employee]).map((x) => dadosFuncionario(x));
    return every;
  }
  // encontrar funcionário
  const findEmployee = e.filter((person) => (
    person.firstName.includes(obj.name)
    || person.lastName.includes(obj.name)
    || person.id.includes(obj.id)
  ));

  if (findEmployee.length === 0) {
    throw new Error('Informações inválidas');
  } else {
    return dadosFuncionario(findEmployee);
  }
}
// getEmployeesCoverage();
module.exports = getEmployeesCoverage;
