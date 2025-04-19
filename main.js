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

document.querySelectorAll('.btnList').forEach(item => {
  item.addEventListener('click', function () {
    const navBar = document.querySelector('.navbar');
    const content = document.querySelector('.imgFundo');
    const isSmallScreen = window.matchMedia('(max-width: 370px)').matches;

    if (navBar) {
      if (navBar.style.height && navBar.style.height !== '0px') {
        navBar.style.height = '0px';
        item.style.width = '30%';

        // Remove a margem se for tela pequena
        if (isSmallScreen && content) {
          content.style.marginTop = '0px';
        }
      } else {
        navBar.style.height = navBar.scrollHeight + 'px';
        item.style.width = '100%';

        // Adiciona a margem se for tela pequena
        if (isSmallScreen && content) {
          content.style.marginTop = '180px';
          item.style.width = '60%';
        }
      }
    }
  });
});
