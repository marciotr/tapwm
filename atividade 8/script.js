
let idades = [];
let opinioes = [];
let mulheres = 0;
let homens = 0;

const form = document.getElementById('formulario')
form.addEventListener('submit', e => {
    e.preventDefault();
    adicionarResposta();
})

function adicionarResposta() {
  const idade = parseInt(document.getElementById('idade').value);
  const sexo = document.getElementById('sexo').value;
  const opiniao = parseInt(document.getElementById('opiniao').value);
  
  idades.push(idade);
  
  opinioes.push(opiniao);
  
  if (sexo === 'F') {
    mulheres++;
  } else {
    homens++;
  }
  
  calcularEstatisticas();
}

function calcularEstatisticas() {

  const somaIdades = idades.reduce((total, idade) => total + idade, 0);
  const mediaIdade = somaIdades / idades.length;
  document.getElementById('mediaIdade').textContent = mediaIdade.toFixed(2);

  const idadeMaisVelha = Math.max(...idades);
  document.getElementById('maisVelha').textContent = idadeMaisVelha;

  const idadeMaisNova = Math.min(...idades);
  document.getElementById('maisNova').textContent = idadeMaisNova;
  
  const qtdPessimo = opinioes.filter(opiniao => opiniao === 1).length;
  document.getElementById('qtdPessimo').textContent = qtdPessimo;
  
  const qtdOtimoBom = opinioes.filter(opiniao => opiniao >= 3).length;
  const porcentagemOtimoBom = (qtdOtimoBom / opinioes.length) * 100;
  document.getElementById('qtdOtimoBom').textContent = porcentagemOtimoBom.toFixed(2) + '%';

  document.getElementById('numMulheres').textContent = mulheres;
  document.getElementById('numHomens').textContent = homens;
}