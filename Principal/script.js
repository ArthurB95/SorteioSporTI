function sortear() {

  let jogador1 = document.querySelector('#jogador1').value
  let jogador2 = document.querySelector('#jogador2').value
  let resultado = document.querySelector('#resultado')

   if(jogador1 == '' || jogador2 == '') {
        alert('Os dois campos precisam estar preenchidos com algum nome!')
   } else {

    let sorteio
      
    sorteio = Math.round(Math.random(1, 2))

    if(sorteio == 1){
      resultado.innerHTML = `O atleta sorteado é ${jogador1}` 
    } else if (sorteio == 0){
      resultado.innerHTML = `O atleta sorteado é ${jogador2}`
    }

   }
}

function limpar() {

  window.location.reload()
}