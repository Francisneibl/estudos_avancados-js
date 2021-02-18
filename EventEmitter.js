//Event Emitter

//Uma biblioteca nativa do node.js 
const EventEmitter = require('events');//importanto o modulo events
//A classe event emitter esta contida nesse modulo.

const emitter = new EventEmitter();//Instaciando um event emitter

emitter.on('User logged', data=>{//Fazendo um subinscriçãao no evento
    console.log(data);
})

emitter.emit('User logged', {user: 'Francisnei Lima'});//Emitindo um evento.

//Podemos podemos usar o Event Emitter como extensão de uma classe.
class Users extends EventEmitter {
    userLogged(data){
        this.emit('User logged',data);
    }
}

const users = new Users();

//Para consumir apenas o primeiro evente basta usar 'once' no lugar de 'on'.
users.on('User logged', data=>{
    console.log(data);
});

users.userLogged({user: 'Francisnei Lima'});

/*Basicamento o Event Emitter cria emissores de eventos, e ouvintes para esses enventos,
não precisando o emissor ter conhecimento de seus ouvintes, ficando por conta dos ouvintes
executar o código a partir da mensagem emitida.*/