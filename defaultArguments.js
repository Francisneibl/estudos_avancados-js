/* Default argumentes sao uma maneira de atribuir valores padrão
para argumentos de funcçoes caso eles nao sejam passados.
*/

function multiplicar(a = 2 ,b = 3){
    return a * b;
}

multiplicar(6,6);
//6 * 6 = 36
multiplicar(6);
//6 * 3 = 18
multiplicar('undefined',6);
//2 * 6 = 12

/*Podemos também atribuir alementos da funcao como default elements 
para outros argumentos */
function soma(a , b = a){
    return a + b;
}

soma(5, 3);
//5 + 3 = 8;
soma(5);
//5 + 5 = 10

/*Importante levar em consideracao a ordem dos argumentos para esse ultimo caso
por exemplo nao poderima fazer: function soma(a = b, b){}, o default argument tem que ser
declarado na funcao antes de seu uso.*/

//LAZY EVALUATION

//podemos tambem passar funcoes para retornar o default argument 
function numberGeneretion(){
    return Math.random() * 10;
}

function subtracao(a, b=numberGeneretion()){
    return a - b;
}

subtracao(43);
subtracao(50);
//A função numberGeneretion() será invocada toda vez que o segunda paramentro for omitido.  