//Generators

//Função com pausas

//Para criar uma funcao generator basta colocar o "*" antes do nome da função
function* helloGenerator(){
    console.log('Oi');
    yield;//a palavra yield determina os locais onde a funcao sera pausada.
    console.log('Posso ser');
    yield;
    console.log('Pausada!');
    yield;
}

let gen = helloGenerator();
//Essa funcao gera uma interface de iteração.
//Ao chamar um next a funcao será executada até encontrar um yield.
gen.next();
//'Oi' {value: undefined, done: false}
gen.next();
//'Posso ser' {value: undefined, done: false}
gen.next();
//'Pausada' {value: undefined, done: false}
gen.next();
//{value: undefined, done: true}

//Podemos retornar valores, basta colocarmos o valor apos a palavra yield
function* contador() {
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}
contador.next();
//{value: 0, done: false}
contador.next();
//{value: 1, done: false}
contador.next()
//{value: 2, done: false}

//Também podemos enviar valores atraves do next()
function* receiver() {
    let val;
    //O valor é retornado pelo yield
    valor = yield console.log(valor);//Primeira pausa da funcao, antes de atribuir valor a variavel val.
    yield valor;//Retorna a argumento passado na chamada de next, como value do objeto retornado e pausa a função.
    console.log(valor);//Na terceira vez que é chamado o metodo next() é executado o console.log().
}
let it = receiver();

it.next(1);//{value: undefined, done: false}
it.next(2);//{value: 2, done: false}
it.next(3);// 2
//{value: undefined, done: true}

//Também podemos utilizar generators para criar interfaces iteraveis para objetos.
const obj = {
    values: [1,2,3,4,5],
    *[Symbol.iterator](){
        for(let i = 0; i< this.values.length; i++){
            yield this.values[i];
        }
    }
}

for(let val of obj){
    console.log(val);
}
//1 2 3 4 5