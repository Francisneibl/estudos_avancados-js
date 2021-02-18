//Async Await

//Podemos declarar qualquer funcao como um Promisse apenas usando a palavra Async antes da declaracao
//Com isso estamos dizendo que a função podera ser usada de forma assincrona.

async function funcaoAsync(){
    return 1234;
}

funcaoAsync();//Promise {<fulfilled>: 1234}
funcaoAsync().then(data => console.log(data));//1234

//Em funções assincronas, podemos fazer uso do wait, qua pausa a execução até que uma promisse termine.
const promisse = () => new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Data');
    }, 2000);
});

const promisse2 = () => new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Data2')
    }, 1000);
})

const funcWait = async () => {
    let result = await promisse();//O codigo pausa e só retorna quando a promisse termina.
    console.log(result)
    let result2 = await promisse2();
    console.log(result2)
}
//Experimente rodar esse codigo sem o uso de await é note a difença.