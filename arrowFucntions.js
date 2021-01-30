//forma tradicional de declarar funções
function somaOld(a, b){
    return a + b;
}

//Arrow functions
//Podem ser armazenadas em variavies ou passadas para outras funcoes;
var logA = a => console.log(a);

//para mais de um argumento é obrigatorio o uso de "()"
var sum = (a,b) => a+b;

/*
funcoes que necessitam do uso de condicionais e 
declaracao de variavies, necessitam do uso de "{}" e return do lado direito;
*/
var max = (a,b) => {
    if(a>b){
        return a;
    }else{
        return b;
    }
}

//podemos retornar objetos implicitos com uso de paranteses
var implicitObj = () => ({
    name: 'bar'
});
// porem nao podemos usar Arrow Functions como construtoras.


//Hosting nao se aplica a Arrow Functions
nothosting();

nothosting = () => console.log('Não posso ser chamada antes de ser declarado!');

/*Contexto de invocacao.
Arrow Functions tem o mesmo contexto do codigo que a envolve, em outras palavras
estao no contexto das chaves que a envolvem
*/
var obj = {
    logThis: function(){
        setTimeout(function(){
            console.log('utilizando funcao tradicional');
            console.log(this);
        },1000);
    },

    logThisArrow: function(){
        setTimeout(()=>{
            console.log('utilizando arrow function.');
            console.log(this);
        },1000);
    }
};