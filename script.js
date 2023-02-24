const imagens = [
    {url: './img/AirtonFoto.jpg', nome: 'Airton', participante: './AirtonParticipante/airton.html'},
    {url: './img/BernardoFoto1.jpg', nome: 'Bernardo', participante: './BernardoParticipante/bernardo.html'},
    {url: './img/EduardoFoto.jpg', nome: 'Eduardo', participante: './EduardoParticipante/eduardo.html'},
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
  