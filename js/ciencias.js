function escolherTema() {
  const elemento = document.getElementById('conteudo-materia');

  let videos = conteudo[tema];

  let html = `
  `;

  for (let video of videos) {
    html += `<div class='aula'>
        <h1>${video.titulo}</h1>
        <div class='sobre'>
          <figure>
            <img src="${video.imagem}" alt="${video.titulo}">
            <figcaption onclick="reproduzirVideo('${video.link}')">
            
              <img src="./images/play.png" alt="Clique para iniciar o video!">
  
              </figcaption>
          </figure>
          <p>${video.descricao}</p>
        </div>
      </div>
      <hr>
    `;
  }

  elemento.innerHTML = html;
}

function pesquisar() {
  let videos = videosCiencias;

  const valor = document.getElementById('procurar').value.toLowerCase();
  const elemento = document.getElementById('conteudo-materia');

  if (valor.length < 3) {
    if (!valor) {
      escolherTema();
    }

    return;
  }

  let conteudo = '';

  for (let video of videos) {
    let titulo = video.titulo.toLowerCase();
    let descricao = video.descricao.toLowerCase();

    if (titulo.includes(valor) || descricao.includes(valor)) {
      conteudo += `<div class='aula'>
        <h1>${video.titulo}</h1>
        <div class='sobre'>
          <figure>
            <img src="${video.imagem}" alt="${video.titulo}">
            <figcaption>
              <img src="./images/play.png" alt="Clique para iniciar o video!">
            </figcaption>
          </figure>
          <p>${video.descricao}</p>
        </div>
      </div>
      <hr>
    `;

      elemento.innerHTML = conteudo;
    }
  }

  if (!conteudo) {
    conteudo = '<p>Vídeo não encontrado.<p>';
    elemento.innerHTML = conteudo;
  }
}

function reproduzirVideo(linkVideo) {
  alterarVisibilidade('.modal');

  let video = document.getElementById('video');

  video.innerHTML = `<iframe
      src="${linkVideo}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>`;
}

function fecharVideo() {
  let = video = document.getElementById('video');
  video.innerHTML = '';

  alterarVisibilidade('.modal');

  escolherTema();
}
