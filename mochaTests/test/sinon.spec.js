//Sinon.js
/*Essa lib auxilia em testes mais complexos, formando um otimo trio de testes
juntamente com Mocha.js e Chai.js*/

const Math = require("../main");
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Math class with Sinon.js',function(){
    it('Calls res with sum and index values', function(){
        const req = {};
        const res = {
            //Cria uma funcao espian para trazer informações sobre o comportamento da funcao.
            
            //load: sinon.spy(),
            
            //Poderiamos também fazer isso em funções pre declaradas.
            load: function(){
                console.log('Called...');
            }
        };

        sinon.spy(res, 'load');

        //Já para substituir uma função por uma espian podemos usar o 'stub'
        //sinon.stub(res, 'load').returns('xpto'); Ainda podemos adicionar um retorne personalizado.
        
        //Poderiamos também restaurar a função original com o 'restore'
        //res.restore();
        
        const math = new Math();

        
        math.printSum(req, res, 5 ,5);

        //verificando se a função foi invocada.
        expect(res.load.calledOnce).to.be.true;

        //Verificar argumentos passados para a funcao.
        expect(res.load.args[0][0]).to.equal('index');
        expect(res.load.args[0][1]).to.equal(10);
    });
});