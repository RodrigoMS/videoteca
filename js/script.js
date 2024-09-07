var tema = '';

const conteudo = {
  ciencias: videosCiencias,
  geografia: geografia,
  historia: historia,
  ingles: ingles,
  matematica: matematica,
  portugues: portugues,
};

function geografia() {
  alert('Gegrafia');
}

function historia() {
  alert('historia');
}

function ingles() {
  alert('ingles');
}

function matematica() {
  alert('matematica');
}

function portugues() {
  alert('portugues');
}

function alterarVisibilidade(identificador) {
  const elemento = document.querySelector(identificador);
  elemento.classList.toggle('oculto');

  document.getElementById('conteudo-materia').innerHTML = '';
}

function alterarTema() {
  alterarVisibilidade('.escolha-tema');
  alterarVisibilidade('.cabecalho');
}

/* De acordo com a opção  escolhida, ao clicar no botão avançar, a função 
   envia para a função de conteúdo de cada matéria. */
function exibirConteudo() {
  tema = document.getElementById('materia').value;

  alterarTema();

  escolherTema();
}
