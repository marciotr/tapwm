function Conta(n, b, num, s) {
    var nome = n;
    var banco = b;
    var numero = num;
    var saldo = s;

    this.getNome = function () {
        return nome;
    }
    this.setNome = function (valor) {
        nome = valor;
    }

    this.getBanco = function () {
        return banco;
    }
    this.setBanco = function (valor) {
        banco = valor;
    }

    this.getNumero = function () {
        return numero;
    }
    this.setNumero = function (valor) {
        numero = valor;
    }

    this.getSaldo = function () {
        return saldo;
    }
    this.setSaldo = function (valor) {
        saldo = valor;
    }
}

function ContaCorrente(n, b, num, s, j, d) {

    Conta.call(this, n, b, num, s);
    
    var juros = j;
    var data = d;

    this.getJuros = function () {
        return juros;
    }
    this.setJuros = function (valor) {
        juros = valor;
    }

    this.getData = function () {
        return data;
    }
    this.setData = function (valor) {
        data = valor;
    }
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

function Poupanca(n, b, num, s, j, d) {
    Conta.call(this, n, b, num, s);
    
    var juros = j;
    var data = d;

    this.getJuros = function () {
        return juros;
    }
    this.setJuros = function (valor) {
        juros = valor;
    }

    this.getData = function () {
        return data;
    }
    this.setData = function (valor) {
        data = valor;
    }
}

Poupanca.prototype = Object.create(Conta.prototype);
Poupanca.prototype.constructor = Poupanca;
