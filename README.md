## Boas vindas ao repositório do projeto de ES6 e Higher Order Functions!

- Projeto desenvolvido na Trybe

---

### O que deverá ser desenvolvido

Implementação de  várias funções para atender aos requisitos propostos e garantir que todas as funções passem nos testes unitários.

---

## Requisitos do projeto

---

### 1. Implemente a função `getSpeciesByIds`

Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

---

### 2. Implemente a função `getAnimalsOlderThan`

Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

---

### 3. Implemente a função `getEmployeeByName`

Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

---

### 4. Implemente a função `getRelatedEmployees`

Considerando a boa prática de dividir o código em partes menores, apresentamos a função `getRelatedEmployees` em que você deverá dividí-la em duas funções: 
  
1 - `isManager` - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: `true` ou `false`;

2 - `getRelatedEmployees` - que utiliza a primeira função para apresentar as seguintes saídas: 
  * se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
  * se **não** for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"O id inserido não é de uma pessoa colaboradora gerente!"**.

---

### 5. Implemente a função `countAnimals`

  Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

---

### 6. Implemente a função `calculateEntry`

Esta função irá receber um array de visitantes no seguinte formato:

```javascript
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
```

Você deve isolar a parte da lógica na função `countEntrants` que se encontra no mesmo arquivo da função `calculateEntry`. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

* Pessoas com idade menor que 18 anos são classificadas como crianças (child);
* Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
* Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).

O retorno da função deverá ser um objeto no seguinte formato: `{ child: 3, adult: 2, senior: 1 }`.

---

### 8. Implemente a função `getSchedule`

A função é responsável por disponibilizar as informações de horário dos animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.
 
---

### 9. Implemente a função `getOldestFromFirstSpecies`

A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

---

