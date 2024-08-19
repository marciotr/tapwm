function calcula(nums)
{
    soma = nums.reduce((acc, valor) => acc + valor, 0);
    let quadrado2 = nums[1] * nums[1];
    let quadrado3 = nums[2] * nums[2];

    return ("A soma dos valores:" + soma + " O quadrado do segundo:" + quadrado2 + " O quadrado do terceiro:" + quadrado3);
}


function resultado(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const nums = [num1, num2, num3]

    if (!num1 || !num2 || !num3) {
        alert("prencha os valores!");
    } else {
        let resultado = calcula.apply(null, [nums]);
        alert(resultado);
    }

}

function verificaTexto() {
    const text1 = document.getElementById("text1").value;
    const text2 = document.getElementById("text2").value;
    let resposta = "";
    if (!text1 || !text2) {
        alert("Prencha os valores!")
    } else{
        for (let i = 0; i < text1.length; i++) {
            let teste = text1.substring(i);
            if (text2 == teste) {
                resposta = "É um subconjunto!";
                break;
            } else {
                resposta = "Não é um subconjunto!";
            }
        }
        alert(resposta);
    }

    // if(!text1 || !text2){
    //     alert('erro')
    // }else if(text1.includes(text2)){
    //     alert('é subconjunto');
    // }else {
    //     alert('n é subconjunto')
    // }

}

