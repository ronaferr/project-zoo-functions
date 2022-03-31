const data = require('../data/zoo_data');

const e = data.employees;
const s = data.species;
// função vai pegar paremtro, acessar primeira posição e a chave responsibleFor,
// depois será feito um map, dentro desse map tera um filter de species que será buscado animas que contenham o id da primeira função
// o resultado obtido será passado por outros 2 map que retornarao a especie e a localização
// sera feito um map com o paramentro que retornara uma chave 'id' com um valor de id
// objeto vazio recebera retorno de map com id e demais maps
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

  return result;
}
// if para saber se parametro está vazio, caso esteja passa por todos os funcionarios e usar função acima
// if para saber se encontra funcionario com parametro passado, caso de falha, se gera um erro
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
module.exports = getEmployeesCoverage;
