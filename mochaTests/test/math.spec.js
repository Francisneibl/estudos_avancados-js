const assert = require('assert');
const Math = require('../main.js');

let val = 0;
/*Funcão do mocha que recebe como primeiro parametro uma descrião do será testado,
como por exemplo uma classe.
O segundo argumento é uma funcao onde os testes serão executados.*/

describe('Math class',function(){
    
    //Temos também os hooks, podem ser utilizados para evitar repetição de codigo.
    beforeEach(function(){
        val = 0; //Aqui podemos colocar instruções para serem executadas antes de cada teste.
    });
    /*Existem outros hooks como:
    before: funciona uma vez antes do primeiro teste neste bloco;
    after: funciona uma vez após o último teste neste bloco;
    afterEach: funciona após cada teste neste bloco;
    Hooks também podem receber descriçoes opcionalmente.
    */

    const math = new Math();
    it('Sum two numbers', function(){//Função que descreve e testa um funcionalidade esperada.
        val = 8;
        assert.equal(math.sum(3,5),val);//Lança um erro caso os dois parametros tenha volores diferentes.
    });

    //Tratando metodos assicronos com Mocha
    it('Sub two numbers', function(done){
        /*Usando o metodo done, o mocha aguarda ate algum metodo assincrono
        ou promises terminem para finalizar o teste,
        porém temos que por padrao ele aguarda no maximo 2000ms,
        para melhorar isso podemos setar manualmente um tempo maior.*/ 
        this.timeout(3000);
        //Note que não podemos usar Arrow functions por quetoes de escopo.
        //Em Arrow functions não teriamos acesso ao this desta função.
        math.sub(5,3,value =>{
            val = 2;
            assert.equal(value, val); 
            done();
        });
    });

    /*Podemos também escrever testes antes de implementarmos a funcão,
    ao rodarmos o script de teste esse teste ficará sinalizado como pendente.*/
    it('Multiply two numbers');

    it('Test if val is zeroed',function(){
        assert.equal(val, 0);
    });

    /*Temos outros funcionalidades como:
    it.only('description',function()) para testar apenas esse teste;
    it.skip('description, function()) para pular um teste, o mesmo será sinalizado como pendente;*/
});

/*O mocha captura qualquer erro que acontece nos escripts de teste.
Portando a função asserte serve apenas comparar se alguma ação está retornando os valores esperados,
caso contrario ela dispara um erro, nao havendo necessidade de fazer isso de forma manual.
*/


