pontosAcumulados = 0; // Total acumulado entre várias jogadas

function jogar() {
  rodada = 1;
  pontosRodada = 0;
  nomeJogador = document.getElementById("nomeJogador").value;

  while (rodada <= 3) {
  escolhaJogador = prompt("Nível " + rodada + ", porta (1, 2 ou 3)?");
  pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador > 3 || escolhaJogador < 1) {
      alert("Digite um valor entre 1 e 3 para jogar!");
      break;
    }

    if (escolhaJogador == pisoQuebrado) {
      alert("Porta Himalaia! Você congelou e perdeu 10 pontos de energia");
      pontosRodada -= 10;
    } else {
      alert("Porta Boo! Porta do Himalaia estava na porta: " + pisoQuebrado);
      pontosRodada += 10;
    }

    rodada++;
  }

  // Após 3 rodadas, soma os pontos da rodada ao total acumulado
  pontosAcumulados += pontosRodada;

  if (rodada == 4) {
    alert(nomeJogador + " venceu! Você achou a porta da Boo! " + pontosRodada + " pontos de energia nesta rodada.");
  }

  document.getElementById('pontos').innerText = pontosAcumulados;
}