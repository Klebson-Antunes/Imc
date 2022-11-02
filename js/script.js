//variavel que contem o container da tabela
const container = document.getElementById('container_table')

//Evento click
const btnCalcular = document.getElementById('btn_calc')
btnCalcular.addEventListener('click', imc)


//Exibir tabela que contem a classificação
function exibirTabela(imc) {
  if (imc > 0) {
    container.style.display = 'flex'
  } else {
    container.style.display = 'none'
  }

}

//Faz o calculo do imc
function calculoImc(peso, altura) {
  const imc = peso / (Math.pow(altura, 2))
  return imc
}

//Função principal ligada ao evento Click onde faz a ponte para outras funcoes da aplicação
function imc(e) {
  e.preventDefault()
  const resp = document.getElementById('resposta')
  const peso = document.getElementById('peso').value
  const altura = document.getElementById('altura').value
  const imc = calculoImc(peso, altura)
  alertaErro(altura, peso)
  resp.innerText = imc.toFixed(1)
  classificacaoImc(imc)
  exibirTabela(imc)
}

//exibir alerta se os campos for 0 ou vazio
function alertaErro(peso, altura) {
  if ((altura == 0 || altura === '') && (peso == 0 || peso === '')) {
    alert('Prencha os Campos Com Valores Validos!!')
  }
}

//Classificacao Do imc
function classificacaoImc(imc) {
  //pegando a tr da tabela para alterar estilo de acordo com o imc
let magreza = document.getElementById('magreza')
let normal = document.getElementById('normal')
let sobrepeso = document.getElementById('sobrepeso')
let obesidade = document.getElementById('obesidade')
let obesidadeGrave = document.getElementById('obsidadegrave')

  if (imc < 18.5) {
    magreza.style.backgroundColor = 'green'
    magreza.style.color = '#fff'

    //caso execute outra vez sem limpar mude
    normal.style.backgroundColor = 'transparent'
    sobrepeso.style.backgroundColor = 'transparent'
    obesidade.style.backgroundColor = 'transparent'
    obesidadeGrave.style.backgroundColor = 'transparent'

  } else if (imc >= 18.5 && imc <= 24.9) {
    normal.style.backgroundColor = 'green'
    normal.style.color = '#fff'

     //caso execute outra vez sem limpar mude
     magreza.style.backgroundColor = 'transparent'
     sobrepeso.style.backgroundColor = 'transparent'
     obesidade.style.backgroundColor = 'transparent'
     obesidadeGrave.style.backgroundColor = 'transparent'

  } else if (imc >= 25.0 && imc <= 29.9) {
    sobrepeso.style.backgroundColor = 'green'
    sobrepeso.style.color = '#fff'

     //caso execute outra vez sem limpar mude
     magreza.style.backgroundColor = 'transparent'
     normal.style.backgroundColor = 'transparent'
     obesidade.style.backgroundColor = 'transparent'
     obesidadeGrave.style.backgroundColor = 'transparent'

  } else if (imc >= 30.0 && imc <= 39.9) {
    obesidade.style.backgroundColor = 'green'
    obesidade.style.color = '#fff'

     //caso execute outra vez sem limpar mude
     magreza.style.backgroundColor = 'transparent'
     normal.style.backgroundColor = 'transparent'
     sobrepeso.style.backgroundColor = 'transparent'
     obesidadeGrave.style.backgroundColor = 'transparent'

  } else if(imc >= 40) {
    obesidadeGrave.style.backgroundColor = 'green'
    obesidadeGrave.style.color = '#fff'

     //caso execute outra vez sem limpar mude
     magreza.style.backgroundColor = 'transparent'
     normal.style.backgroundColor = 'transparent'
     sobrepeso.style.backgroundColor = 'transparent'
     obesidade.style.backgroundColor = 'transparent'
  }

}

