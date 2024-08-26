
function Retangulo(x,y) {
    this.base = x;
    this.altura = y;
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

function Resultado() {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    if (isNaN(base) || isNaN(altura)) {
        alert("Erro! Insira novamente VALORES NÚMERICOS para Base e Altura!");
        return;
    }
    
    const retangulo = new Retangulo(base, altura);
    const area = retangulo.calcularArea();
    alert("A área do retângulo é: " + area);
}