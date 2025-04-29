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
      prompt("Nível " + rodada + ", porta (1, 2 ou 3)?");
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
    const content = document.querySelector('.content');
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    const body = document.querySelector('body');
    const html = document.querySelector('html');

    if (navBar) {
      // Aplica a transição no JavaScript
      content?.style.setProperty('transition', 'margin-top 0.5s ease');
      body?.style.setProperty('transition', 'height 0.5s ease');
      html?.style.setProperty('transition', 'height 0.5s ease');
      item?.style.setProperty('transition', 'width 0.5s ease');

      if (navBar.style.height && navBar.style.height !== '0px') {
        navBar.style.height = '0px';
        item.style.width = '30%';
        body.style.height = '100%';
        html.style.height = '100%';

        // Remove a margem se for tela pequena
        if (isSmallScreen && content) {
          content.style.marginTop = '0px';
        }
      } else {
        navBar.style.height = navBar.scrollHeight + 'px';

        // Ajusta a largura de acordo com o tamanho da tela
        if (isSmallScreen) {
          item.style.width = '60%';
          content.style.marginTop = (navBar.scrollHeight + 50) + 'px';
          body.style.height = '110%';
          html.style.height = '110%';
        } else {
          item.style.width = '100%';
        }
      }
    }
  });
});

