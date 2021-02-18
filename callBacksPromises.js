//callbacks
//Exemplo do uso de callbaks sem promises;


function doSomething(callback) {
    setTimeout(function() {
        //faz alguma coisa
        callback('First data');
    },1000);
}

function doOtherThing(callback) {
    setTimeout(function(){
        //faz alguma coisa
        callback('Second data');
    },1000);
}

function doAll(){
    try {
        doSomething(function(data){
            var processedData = data.split('');
            
            try {
                doOtherThing(function(data){
                    var processedData2 = data.split('');

                    try {
                        setTimeout(() => {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (error) {
                        console.log(error)
                    }
                });
            } catch (error) {
                console.log(error)
            }
        });
    } catch (error) {
        console.log(error)
    }
}

//Promises
/*Uma promise pode ter três estados
-Pending: Quando ainda está em execução.
-Fullfilled: Quando terminou de ser executada com sucesso.
-Rejected: Quando houve algum erro na execução.
*/

//Agora refazendo o código acima utilizando promises:

doSomethingPromised = () => new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('First data');
    }, 1500);
});

doOtherThingPromised = () => new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Second data');
    }, 1000);
})

console.log(doSomethingPromised());//Promise {<pending>}
//O resultado será pending proque essa funcao só sera finalizada apos um timeout, oque acontence apos o console.log().

//Podemos utilizar o metodo then, para executar algo apenas apos a finalização da promise.
doSomethingPromised().then(data => console.log(data));//First data  Promise {<fulfilled>: undefined}

//Para caso ocorra algum erro basta utilizar o catch
doSomethingPromised()
    .then(data => console.log(data))
    .catch(erro => console.log(erro));

//Encadeando promises
doSomethingPromised()
    .then(data => {
        console.log(data);
        return doOtherThingPromised();
    })
    .then(data2 =>{
        console.log(data2);
    })
    .catch(erro => console.log(log)); //Apenas um catch serve para as duas promises.

//Chamando promises de forma paralela

Promise.all([doSomethingPromised, doOtherThingPromised])
    .then(data => console.log(data))
    .catch(erro => console.log(erro));//['First data', 'Second data']


//Chamando de forma paralela, porem pegando apenas o valor da promise que terminar primeiro
Promise.race([doOtherThingPromised(), doOtherThingPromised()])
    .then(data => console.log(data));//'Second data'
