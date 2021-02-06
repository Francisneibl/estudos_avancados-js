//Metodo tradicinal de itera sobre os argumentos da funcao

function soma() {
    let value = 0;
    for(var i=0;arguments.length > i;i++){
        value += arguments[i];
    }

    return value;
}

soma(2,5,6,8,9);
//30

//rest operator em funcoes
function soma2(...args) {
    return args.reduce((acc, cur) => acc += cur,0);
}
soma2(5,9);
//14

/*Usando o rest operator em funçoes todos os paramentros passados
são transformados em um Array.
OBS: ArrowFunctions nao contem o 'arguments' entao é aconselhavel o uso de rest operator
*/

//Podemos também usa-lo para pegar parametros extras em funcoes.
var funcRest = (a,b,...args)=> {
    console.log(a);
    console.log(b);
    console.log(args)
}
funcRest(5,6,7,8,9);
// 5 6 [7,8,9]

//SPREAD OPERATOR
function multiplicacao(...args) {
    return args.reduce((acc, cur)=> acc *= cur,1);
}

var values = [2,5,6,7,8,3,9];
multiplicacao(...values);

/*Tem a mesma notacao do Rest Operator porém tem efeito contrario,
quando usado na chamada na função ele quebra um array e transforma em parametros.
*/

//Rest e Spread operators podem ser usados em Strings, Arrays, Objetos e Objetos iteraveis
let string = 'Esta string será um array';
let array = [...string];

//podemos usar também para mesclar ou clonar Arrays
let arr1 = [1,2,3,4];

let arr2 = [...arr1,5,6,7,8];
//[1,2,3,4,5,6,7,8]
let cloneArr2 = [...arr2];
//[1,2,3,4,5,6,7,8]

/*Podemos também utilizar para criar Objetos, porém precisamos nós atentar
que o spread de um objeto pode ser usado apenas para criar outro objeto.*/
const obj = {
    name: 'car'
}

const obj2 = {
    ...obj,
    color: 'red'
}
//{name: 'car', color:'red'}

//Em caso de sobreposicao de chaves, precisamos nós atentar que permanecera a ultima declaracao

const obj3 = {
    name: 'bike',
    ...obj
}
//{name: 'car'}
const obj4 = {
    ...obj,
    name: 'bike'
}
//{name: 'bike'}

/*Ao fazer Spread de um objeto dentro de outro, note que será um copia raza, 
ou seja sera feita a cópia apenas de objetos de primeiro nivel, os de niveis mais baixos
serao passados por referencia*/

const objMultNivel = {
    name: 'multiNivel',
    subObject: {value: 123}
}

const copiaMultiNivel = {
    ...objMultNivel
}

copiaMultiNivel.subObject.value = 456;
//Ira alterar a chave test dos dois objetos, a do original e a copia.

//Para resolver isso poderiamos fazer o sequinte:
const copiaCorreta = {
    ...objMultNivel,
    test: {...objMultNivel.subObject}
}

let arrayFail = [...obj];
//A declaração acima geraria um erro, para podermos fazer algo assim o 'obj' deveria ser iteravel.