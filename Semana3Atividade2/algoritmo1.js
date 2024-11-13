//const tamanho criada para digitar uma lista de números
const tamanho = prompt('Digite o tamanho da lista de números');
//passando tamahno para um inteiro
const value = parseInt(tamanho)
//criando uma lista com preenchimento nulo
const lista = new Array(value).fill(null);

//iterando os elementos da lista e retorna índice mais +1
lista
 .map(function (index) {
   return index + 1;
 })
 //usado o reduce para percorrer a lista, que irá acumular os elementos da lista em um único valor
 //onde o acumulador vai multiplar pelos itens
 .reduce( (acumulador, item) => acumulador * item);

//criando uma nova array que recebe a lista anterior
//preechendo a lista com valor null
//iterando os elementos e o índice
//acumulando em um único valor e somando com os itens
new Array(value)
 .fill(null)
 .map((item, index) => index + 1)
 .reduce((acumulador, item) => acumulador + item);

 console.log(value);
 
