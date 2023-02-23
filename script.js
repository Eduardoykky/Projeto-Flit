const imagens = [
    {url: './img/esqueleto dansando mto foda.gif', nome: 'Imagem 1', participante: 'participante1.html'},
    {url: './img/giphy.gif', nome: 'Imagem 2', participante: 'participante2.html'},
  ];
  
  let indiceAtual = 0;
  
  const imagemElemento = document.getElementById('imagem');
  const nomeElemento = document.getElementById('nome');
  const botaoEsquerda = document.querySelector('.Arrow1');
  const botaoDireita = document.querySelector('.Arrow2');
  const linkParticipante = document.getElementById('link-participante');
  
  botaoEsquerda.addEventListener('click', () => {
    if (indiceAtual === 0) {
      indiceAtual = imagens.length - 1;
    } else {
      indiceAtual--;
    }
    atualizarImagemETexto();
  });
  
  botaoDireita.addEventListener('click', () => {
    if (indiceAtual === imagens.length - 1) {
      indiceAtual = 0;
    } else {
      indiceAtual++;
    }
    atualizarImagemETexto();
  });
  
  linkParticipante.addEventListener('click', () => {
    window.location.href = imagens[indiceAtual].participante;
  });
  
  function atualizarImagemETexto() {
    imagemElemento.src = imagens[indiceAtual].url;
    nomeElemento.textContent = imagens[indiceAtual].nome;
    linkParticipante.href = imagens[indiceAtual].participante;
  }
  