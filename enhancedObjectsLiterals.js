//Metodo classico de declaração de objetos

var property = 'test';
var obj = {
    property: property
}

//Com ECMS 6 
var name = 'test';

var obj = {
    name
}
/*
retultado:
{name: test}
*/

//O mesmo acontece com metodos

function log(){
    console.log('log...');
}

var obj = {
    log
}

//podemos tambem omitir o nome do metodo
var obj = {
    sum(a,b){
        return a + b;
    }
}

console.log(obj.sum(3,6));
//3 + 6 = 9

//Podemos usar valores de variaveis como atributos diretamente na declaracao de objetos
var property = 'name';

var obj = {
    [property]: 'Francisnei'
}

/*
{name: 'Francisnei'}
*/