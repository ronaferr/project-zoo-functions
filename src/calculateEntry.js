const data = require('../data/zoo_data');

const p = data.prices; // define variavel com valor de chave prices

function countEntrants(entrants) {
  // seu código aqui
  const result = { child: 0, adult: 0, senior: 0 }; // cria objeto para resposta
  entrants.forEach((person) => { // função vai passar por objetos e verificar a idade para contabilizar resultado
    if (person.age < 18) {
      result.child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      result.adult += 1;
    } else {
      result.senior += 1;
    }
  });
  return result;
}

function calculateEntry(entrants) {
  // seu código aqui
  // verificar se o parametro está vazio ou se tem um objeto vazio
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const list = countEntrants(entrants);
  const persons = Object.values(list);
  const prices = Object.values(p);
  // criação de variaveis referentes as posições dos elementos child de person * price child de prices
  const v = persons[0] * prices[2];
  const v2 = persons[1] * prices[0];
  const v3 = persons[2] * prices[1];
  const total = v + v2 + v3;
  return total;
}

module.exports = { calculateEntry, countEntrants };
