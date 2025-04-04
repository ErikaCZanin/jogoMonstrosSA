rodada = 1

while(rodada <= 3) {
  escolhaJogador = prompt("Nivel " +rodada+", vidro (1,2 ou 3)?")
  pisoQuebrado = Math.floor(Math.random() * 3) +1;
  
  if(escolhaJogador > 3) {
    alert("Digite um valor entre 1 ou 3 para jogar!")
    break;
  }
  
  if(escolhaJogador == pisoQuebrado) {
    alert("Video quebrou! Acabou o jogo para você")
    rodada = 1000
  }
  else {
    alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado)
  }
  
  rodada = rodada + 1
}

if (rodada == 4) {
  alert("Você venceu!")
}