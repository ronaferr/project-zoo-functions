const data = require('../data/zoo_data');

const s = data.species;

function filterAnimal(value) {
  return s.filter((jaula) => jaula.name.includes(value));
}

function countAnimals(obj) {
  if (!obj) {
    const o = {};
    const h = s.map((j) => ({
      [`${j.name}`]: j.residents.length }));
    h.forEach((objI) => Object.assign(o, objI));
    return o;
  }
  const a = filterAnimal(obj.specie);
  if (!obj.sex) {
    const b = a.map((jaula) => jaula.residents.length)[0];
    return b;
  }
  if (obj.specie && obj.sex) {
    const d = a.map((animal) => animal.residents)[0];
    const e = d.filter((residentes) => residentes.sex === obj.sex).length;
    return e;
  }
}
module.exports = countAnimals;
