var tema = '';
var videos = '';

/* Carrega a base dados escolhida. */
const conteudo = {
  ciencias: {
    titulo: 'Ciências',
    arquivo: videosCiencias,
  },
  geografia: {
    titulo: 'Geografia',
    arquivo: videosGeografia,
  },
};

/* Adiciona ou remove a classe "oculto" a partir do 
   identificador da tag */
function alterarVisibilidade(identificador) {
  const elemento = document.querySelector(identificador);
  elemento.classList.toggle('oculto');

  document.getElementById('conteudo-materia').innerHTML = '';
}

/* Alterna entre a tela de escolha do tema e 
   a tela que exibe o conteúdo do tema. */
function alterarTema() {
  alterarVisibilidade('.escolha-tema');
  alterarVisibilidade('.cabecalho');
}

/* Ao click em avançar os videos do tema são carregados */
function exibirConteudo() {
  tema = document.getElementById('materia').value;

  videos = conteudo[tema].arquivo;

  alterarTema();

  escolherTema();
}

// Adiciona a opção materia conforme o conteúdo adicionado.
function carregarOpcoes() {
  const conhecimento = document.getElementById('materia');
  const chaves = Object.keys(conteudo);

  chaves.forEach((chave) => {
    conhecimento.innerHTML += `<option id="${chave}" value="${chave}">${conteudo[chave].titulo}</option>`;
  });
}

carregarOpcoes();
