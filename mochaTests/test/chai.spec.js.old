//Chai

/*Podemos utilizar o Mocha com metodos asserts porem os asserts não
são muito descritivos. Para isso podemos utilizar a lib Chai.js.
Essa lib faz o mesmo que a assert só que de maneira mais descritiva.*/

const Math = require('../main');
const expect = require('chai').expect;

describe('Math class with Chai.js',function(){
    const math = new Math();
    it('Sum two numbers',function(){
        //Note que apesar de mais extenso o teste esta mais legivel(descritivo).
        expect(math.sum(5,5)).to.equal(10);
    });

    it('Div two numbers', function(done){
        this.timeout(3000);

        math.sub(8,4, value=>{
            expect(value).to.equal(4);
            done();
        })
    });

    it.only('Test Objects',function(){
        //Também podemos comparar objetos e suas propriedades
        const obj = {
            name: 'Francisnei'
        };
        //Verifica se o objeto possui propriedade name.
        expect(obj).to.have.property('name');

        //Verifica o valor da propriedade
        expect(obj).to.have.property('name').equal('Francisnei');

        obj2 = {name: 'Francisnei'};
        //Para comparar dois objetos pelo seu conteudo interno, usamos o seguinte metodo:
        expect(obj).to.deep.equal(obj2);

    });

});

//O chai.js conta com uma otima documentação: https://www.chaijs.com/guide/