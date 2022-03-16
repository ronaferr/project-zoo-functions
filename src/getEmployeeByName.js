const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  // if para saber se o paramentro esta vazio, caso esteja, retornar obj vazio
  if (!employeeName) {
    return {};
  }
  // criação de variavel para filtar nome do funcionario
  const employee = employees.filter((person) => (
    person.firstName === employeeName || person.lastName === employeeName));
  return employee[0];
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
