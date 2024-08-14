function obterValores() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    return [num1, num2, num3, num4];
}

function Maior_ifs() {
    const [num1,num2,num3,num4] = obterValores();

    let maiornumero = num1;

    if (num2 > maiornumero)
    {
        maiornumero = num2
    } 
    if (num3 > maiornumero)
    {
        maiornumero = num3;
    } 
    if (num4 > maiornumero) 
    {
        maiornumero = num4;
    }

    document.getElementById("resultado").value = maiornumero;
}

function Maior_max() {

    const [num1,num2,num3,num4] = obterValores();

    let maiornumero = Math.max(num1,num2,num3,num4);

    document.getElementById("resultado").value = maiornumero;
}

function Crescente() {

    const [num1,num2,num3] = obterValores();

    const valores = [num1, num2, num3];
    valores.sort((a, b) => a - b);
    document.getElementById("resultado").value = valores.join(', ');
}
