const prompt = require('prompt-sync')();
function saudacao(nome) {
    console.log("Olá! " + nome);
}

function entradeNome(callback) {
    var nome = prompt('Digite seu nome: ');
    callback(nome);
}

entradeNome(saudacao);