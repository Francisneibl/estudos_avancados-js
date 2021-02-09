//Destructing Assigment

let frutas = ['maça','banana', 'abacate'];

//Essa Array frutas é quebrado e atribuido as respectivas variaveis dentro dos [].
//OBS: usei nomes iguais para mera exemplificacao, a atribuição será feita na mesma ordem dos elementos do Array
let [maca, banana, abacate] = frutas;
console.log(maca);
//"maça"
console.log(banana);
//"banana"
console.log(abacate);
//"abacate"

//Podemos usar Destructing em arrays multidimenção também.
let frutas2 = ['maça','banana', 'abacate',['melancia']];

let [maca2, banana2, abacate2,[melancia]] = frutas2;
/*Porém é preciso cuidado ao trabalhar com arrays multidimensionais, pois se
nao existir uma chave no nivel mais abaixo isso resultará em um erro. 
Já em elementos do primeiro nivél na falta de uma chave a variavel será atribuida com 'undefined'.*/
let cars = ['ford','chevrolet'];
let [marca1, marca2, marca3] = cars;
// marca1 = 'ford', marca2='chevrolet', marca3 = undefined.

let [car1, car2, [car3]] = cars;
//Isso irá gerar um erro pois não existe nenhuma chave no segundo nivel do array.

//também podemos usar essa tecnica em strings
let palavra = 'palavra';
let [l1,l2,l3,l4,l5,l6,l7] = palavra
//l1 = 'p', l2 = 'a', l3 = 'l', ....

//OBJECTS

let person = {
    name: 'francisnei',
    age: 17,
    favoriteColors: ['blue','black'],
    child: {name: 'F. junior', age: 2}
}

let {name} = person;
//name = 'francisnei'

/*Em objetos o destructing busca pelas chaves, para declarar variaveis 
com nomes personalizados digita-se a chave e o nome na variavel apos ':'.*/
let {name: nome} = person
//nome = 'francisnei'
let {age: idade} = person;
//idade = 17

//Também podemos destruir Arrays dentro de objetos.
let {favoriteColors: [color1, color2]} = person;
//color1 = 'blue', color2 = 'black'

//E também objetos dentro de objetos
let {child: {name}} = person;
//name = 'F junior'.
let {child: {age: idade}} = person;
//idade = 2

//Ou objetos detro de arrays
let arrObj = [{name: 'Objeto test'}];

let [{name: nome}] = arrObj;
//nome = 'Objeto test'

//FUNCTIONS
//Também podemos usar este conceito em funções
function sum([a, b]) {
    return a + b;
}

sum([5,9]);
//14

//Tanto em funcoes normais quanto em Arrow Functions. Usando Array ou objetos
var div = ({a, b}) => a + b;
div({a: 5, b: 7});
//12

//Ainda podemos mesclar Destructing com Default Arguments

var mult = ({a = 1, b = 1}) => a * b;
mult({a: 5});
//5
mult({a: 5, b: 2});
//10