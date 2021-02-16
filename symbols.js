//Symbols

//Uma maneira de gerar identificadors unicos.
//Não podem ser descritos apenas são identificadores unicos.

const idUnique = Symbol();

//Podemos utilizar simbols para atributos de objetos que nao dever ser modificados.

const obj = {
    [idUnique]: 1654,
    name:'test'
}