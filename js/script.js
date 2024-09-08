var tema = '';
var videos = '';

/* Carrega a base dados escolhida. */
const conteudo = {
  ciencias: videosCiencias,
  geografia: videosGeografia,
  /*historia: videosHistoria,
  ingles: videosIngles,
  matematica: videosMatematica,
  portugues: videosPortugues,*/
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

  videos = conteudo[tema];

  alterarTema();

  escolherTema();
}
