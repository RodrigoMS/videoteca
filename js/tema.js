l;

/* Apresenta todos os vídeos referentes ao tema. */
function escolherTema() {
  // Obtém o elemento onde os vídeos serão exibidos.
  const elemento = document.getElementById('conteudo-materia');

  // Inicializa a variável que armazenará o HTML dos vídeos.
  let html = ``;

  // Itera sobre a lista de vídeos.
  for (let video of videos) {
    // Adiciona o HTML de cada vídeo à variável html.
    html += `<div class='aula'>
        <h1>${video.titulo}</h1>
        <div class='sobre'>
          <figure>
            <img src="${video.imagem}" alt="${video.titulo}">
            <figcaption onclick="reproduzirVideo('${video.link}')">
              <img src="./images/play.png" alt="Clique para iniciar o vídeo!">
            </figcaption>
          </figure>
          <p>${video.descricao}</p>
        </div>
      </div>
      <hr>
    `;
  }

  // Atualiza o conteúdo do elemento com os vídeos encontrados.
  elemento.innerHTML = html;
}

/* Faz a busca de um vídeo específico, a partir do título ou descrição. */
function pesquisar() {
  // Obtém o valor do campo de busca e converte para minúsculas.
  const valor = document.getElementById('procurar').value.toLowerCase();
  // Obtém o elemento onde os resultados serão exibidos.
  const elemento = document.getElementById('conteudo-materia');

  // Verifica se o valor da busca tem menos de 3 caracteres.
  if (valor.length < 3) {
    // Se o campo de busca estiver vazio, apresenta todos os vídeos do tema.
    if (!valor) {
      escolherTema();
    }
    // Se for menor que 3 caracteres a pesquisa não acontece.
    return;
  }

  // Inicializa a variável que armazenará o HTML dos resultados.
  let html = '';

  // Itera sobre a lista de vídeos.
  for (let video of videos) {
    // Converte o título e a descrição do vídeo para minúsculas.
    let titulo = video.titulo.toLowerCase();
    let descricao = video.descricao.toLowerCase();

    // Verifica se o título ou a descrição do vídeo contém o valor da busca.
    if (titulo.includes(valor) || descricao.includes(valor)) {
      // Adiciona o HTML do vídeo encontrado à variável html.
      html += `<div class='aula'>
        <h1>${video.titulo}</h1>
        <div class='sobre'>
          <figure>
            <img src="${video.imagem}" alt="${video.titulo}">
            <figcaption>
              <img src="./images/play.png" alt="Clique para iniciar o vídeo!">
            </figcaption>
          </figure>
          <p>${video.descricao}</p>
        </div>
      </div>
      <hr>
    `;

      // Atualiza o conteúdo do elemento com os resultados encontrados.
      elemento.innerHTML = html;
    }
  }

  // Se nenhum vídeo for encontrado, exibe uma mensagem de "Vídeo não encontrado".
  if (!html) {
    html = '<div class="centralizar"><p>Vídeo não encontrado.<p></div>';
    elemento.innerHTML = html;
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
  let video = document.getElementById('video');
  video.innerHTML = '';

  alterarVisibilidade('.modal');

  escolherTema();
}
