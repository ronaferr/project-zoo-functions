const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  // criar função que verifica se id é gerente
  const person = data.employees.some((objPerson) => objPerson.managers.includes(id));
  return person;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const func = isManager(managerId);

  if (func === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const l = [];
  data.employees.forEach((e) => {
    if (e.managers.includes(managerId)) {
      l.push(`${e.firstName} ${e.lastName}`);
    }
  });
  return l;
}

module.exports = { isManager, getRelatedEmployees };
