//Fetch metodo fazer requisições e consumir dados de apis

/*O metodo fetch so retorna erro de rede,
por isso é necessário o tratamento de outros erros atraves
do atributo status do response.
O retorno do fetch é uma promisse.
*/

fetch('http://localhost:5500/data.json')
    .then(data => {
        if(data.status === 200){ //Caso a requisição seja feita mesmo que nao retorne nada(como erro de arquivo nao encontrado)
            return data.json();   //o erro não será acusado no fetch, por isso essa condicional.
        }else{
            throw new Error('Request error')
        }
    })
    .then(data=> console.log(data))
    .catch(erro => console.log(erro));

//O metodo fetch também aceito um segundo parametro sendo um objeto de configurações
//fech('http://localhost:5500/data.json',{method: 'post'}) 